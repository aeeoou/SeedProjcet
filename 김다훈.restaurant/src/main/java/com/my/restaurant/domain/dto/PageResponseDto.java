package com.my.restaurant.domain.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Data
public class PageResponseDto<E> {
    private List<E> items; // 아이템을 저장하는 List, 여기에는 테이블속의 컬럼들의 데이터들이 들어있음
    private List<Integer> pageNums; //page의 총개수, 1페이지 아이템을 5개 보여준다치면,
    // 글이 100개이면 페이지개수가 20페이지, 1~20이라는 숫자가 List에 담긴다.
    private PageRequestDto request; // PageRequestDto에서 받아온 page, size가 들어있음
    private boolean prev, next; // 이전페이지, 다음페이지 변수
    private int currentPage, prevPage, nextPage, totPageCnt, totItemCnt;
    // 현재페이지, 이전페이지, 다음페이지, 총페이지개수, 총아이템개수

    @Builder // 메서드 위에 사용하면 우리가 만든 메서드를 builder패턴으로 사용하겠다는 뜻.
    public PageResponseDto(List<E> items, PageRequestDto request, long totItemCnt) {
        // items에 테이블내의 컬럼데이터들이 들어있음. ex) userId, userName, userPw 등
        // request는 page와 size값이 들어있다.
        // totItemCnt는 아이템의 총개수
        this.items = items;
        this.request = request;
        this.totItemCnt = (int)totItemCnt;
        int end = (int)(Math.ceil(request.getPage() / 10.0)) * 10; // page의 시작과 끝값 구하기, end = 10페이지
        // request.getPage(): 현재페이지(1페이지라면), 1 / 10.0 = 0.1(double) Math.ceil(0.1) = 1 => 1 * 10 -> end = 10
        // request.getPage(): 2페이지라면, 2 / 10.0 = 0.2(double) Math.ceil(0.2) = 1 => 1 * 10 -> end = 10
        // request.getPage(): 11페이지라면, 11 / 10.0 => 1.1(double) Math.ceil(1.1) = 2 => 2 * 10 -> end = 20
        // Math.ceil은 소수점의값을 올려서 정수값으로 표현한다.
        int start = end - 9; //start = 1페이지
        int last = (int)(Math.ceil((totItemCnt / (double)request.getSize())));
        // 18개의 게시글이 있다면 18 / 5.0 = 3.6 => ceil 메서드로 인해 4페이지가 마지막페이지가 된다.
        // 마지막페이지를 의미하는 last
        end = end > last ? last : end; // 15개의 게시글이 있다면 end: 10, last: 3이라면 마지막페이지는 last가 되어야함.
        this.prev = start > 1; // 1페이지가 아니라면 이전페이지가 모두 있다.
        this.next = totItemCnt > end * request.getSize(); // 총 200개의 게시글이 있다면, 현재페이지가 11페이지라면,
        // end는 20이 된다. end * request.getSize() => 20*5 = 100, 200 > 100 이므로 next 페이지가 존재함.
        this.pageNums = IntStream.rangeClosed(start, end).boxed().collect(Collectors.toList()); // 페이지의 갯수를 담는다.
        if(prev) this.prevPage = start - 1; // prev가 있다면 버튼을 눌렀을때 start에서 -1한 값이된다.
        if(next) this.nextPage = end + 1;
        this.totPageCnt = this.pageNums.size();
        this.currentPage = request.getPage(); // 현재페이지
    }
}
