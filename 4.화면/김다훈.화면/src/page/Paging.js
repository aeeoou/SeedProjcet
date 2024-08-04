const Paging = ({response, toList}) => {
    return ( // 이전버튼
        <div className='m-6 flex justify-center'>
            {response.prev ?
                <div className='m-2 p-2 w-16 text-center font-bold text-blue-400'
                     onClick={() => toList({page: response.prevPage})}> Prev
                </div> : <></>}
            {response.pageNums.map(pageNum =>
                <div key={pageNum}
                     className={`m-2 p-2 w-12 text-center rounded shadow-md text-white
                    ${response.currentPage == pageNum ? 'bg-gray-500' : 'bg-blue-500'}`}
                     onClick={() => toList({page: pageNum})}> {pageNum}
                </div>)}
            {response.next ?
                <div className='m-2 p-2 w-16 text-center font-bold text-blue-400'
                     onClick={() => toList({page: response.nextPage})}>Next
                </div> : <></>}
        </div>
    )
}

export default Paging