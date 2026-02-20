import React, { useEffect, useState } from 'react';
import { Pagination } from './styles';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import useRouter from '../../../hooks/useRouter';



const Paginate: React.FC<{totalItems: number, limit: number, pages: number, onRowsPerPageUpdate?: Function}> = ({totalItems = 20, limit = 20}) => {
    const [pageList, setPageList] = useState<number[]>([])
    const [_canNextPage, setCanNextPage] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [_canPreviousPage, setCanPreviousPage] = useState(false)
    const [nextPageNumber, setNextPageNumber] = useState(1)
    const [previousPageNumber, setPreviousPageNumber] = useState(1)
    const router = useRouter();


    const generatePages = () => {
        let totalPages = Math.ceil(totalItems / limit)

        let _pages = []
        if (totalPages > 10) {
            generateLongPages(totalPages)
        } else {

            for (let index = 0; index < totalPages; index++) {
                const pageString = index+1;
                _pages.push(pageString)
            }
    
            setPageList(_pages)
        }
    }

    const generateLongPages = (totalPages: number) => {
        const _leftPages = getLeftPages(totalPages)
        const _rightPages = getRightPages(totalPages)

        setPageList([..._leftPages, ..._rightPages])
    }

    const getLeftPages = (_totalPages: number) => {
        let _pages = []

        const _checkPrev = currentPage - 3;

        if (_checkPrev > 1) {
            _pages.push(1)
            for (let index = 0; index < 3; index++) {
                const pageString = _checkPrev + index;
                _pages.push(pageString)
                
            }
        } else {
            for (let index = 0; index < (currentPage -1); index++) {
                const pageString = index+1;
                _pages.push(pageString)
            }
        }

        return _pages
    }


    const getRightPages = (totalPages: number) => {
        let _pages = []

        const _checkNext = parseInt(currentPage.toString()) + 3;

        if (_checkNext < totalPages) {
            let _newPage = currentPage;
            _pages.push(currentPage)
            for (let index = 0; index < 3; index++) {
                _newPage = _newPage + 1;
                _pages.push(_newPage)
            }
            _pages.push(totalPages)
        } else {
            let _newPage = currentPage;
            _pages.push(currentPage)
            for (let index = 0; _newPage < totalPages; index++) {
                _newPage = _newPage + 1;
                _pages.push(_newPage)
            }
        }

        return _pages;
    }

    const getNextPage = () => {
        if (pageList.length == 0){
            return;
        }

        const lastPage = pageList[pageList.length -1]
        const _nextPage = currentPage + 1;
        if (lastPage >= _nextPage) {
            setNextPageNumber(_nextPage)
            setCanNextPage(true)
        } else {
            setNextPageNumber(lastPage)
            setCanNextPage(false)
        }
    }

    const getPreviousPage = () => {
        if (pageList.length == 0){
            return;
        }

        const _currentPage = currentPage
        // const _nextPage = currentPage + 1;
        if (_currentPage > 1) {
            setPreviousPageNumber(_currentPage - 1)
            setCanNextPage(true)
        } else {
            setPreviousPageNumber(1)
            setCanPreviousPage(false)
        }
    }

    useEffect(() => {
        if (router.isReady) {
            setCurrentPage(parseInt(router.query.page as string ?? 1))
            generatePages()
        }
    }, [totalItems, limit, router.query.page, router.isReady])


    useEffect(() => {
        getNextPage()
        getPreviousPage()
    }, [currentPage, pageList])

    const updateRoute = (page: number) => {
        router.push({ query: { ...router.query, page: page, limit: limit } })
    }


    return (
        <Pagination>
            <span className="prev" onClick={() => {
                updateRoute(previousPageNumber)
            }}>
                <MdChevronLeft />
            </span>
            <div className="pages-wrapper">
                {pageList.map((item, idx) => {
                    return <span className={`pages ${item == currentPage ? "active" : ""}`} key={idx} onClick={() => {
                        updateRoute(item)
                    }}>{item}</span>
                })}
            </div>
            <span className="next" onClick={() => {
                updateRoute(nextPageNumber)
            }}>
                <MdChevronRight />
            </span>
        </Pagination>
    )
}

export default Paginate;
