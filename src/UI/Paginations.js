import React, {useState, useEffect} from "react"
import './Paginations.css'
import Pagination from 'react-bootstrap/Pagination'

function Paginations({data, numberPaginations}){

    const [loanding, setLoanging] = useState(true)
    const [numPaginations, setNumPaginations] = useState([])
    const [seeNumber, setSeeNumber] = useState({ini:0, end:5})
    const [numberTotalPages, setNumberTotalPages] = useState()
    

    useEffect(
        () => {
            totalPag()
            setSeeNumber({ini:0, end:5})
        },[data]
    )

    const totalPag = () => {
            if(Number(data) < 100){
                const totalPages = Number(data)
                getPaginations(totalPages)
                setNumberTotalPages(totalPages)
            }else{
                const totalPagesMax = 100 
                getPaginations(totalPagesMax)
                setNumberTotalPages(totalPagesMax)
            }

    }

    const getPaginations = (pagTotal) => {
        var numPag = []
        for (var i = 1; i <= pagTotal; i++) {
            numPag.push(i)
        }
        if(numPag.length === pagTotal){
            setNumPaginations(numPag)
            setLoanging(false)
            PaginationNumPage()
        }
    }


    const PaginationNumPage = () => {
        let ini = seeNumber.ini
        let end = seeNumber.end
        return(
            numPaginations
            .slice(ini, end)
            .map((pagN, index) =>{
                return(
                    <Pagination.Item key={index} onClick={()=>{numberPaginations(pagN)}}>{Number(pagN)}</Pagination.Item>
                )
            })
        )
    }
    

    const handleClick = (pag) => {
        if(pag === false & seeNumber.end < numberTotalPages){
            setSeeNumber({ini: seeNumber.ini +5, end: seeNumber.end +5 })
            PaginationNumPage()
        }
        if(pag === true & seeNumber.ini > 1){
            setSeeNumber({ini: seeNumber.ini -5, end: seeNumber.end -5 })
            PaginationNumPage()
        }
    }

    if (loanding){ return(<p>Loanding</p>)}
    return(
        <div className="paginations">
            <Pagination>
                <Pagination.Prev onClick={ ()=>{handleClick(true)}}/>
                <Pagination.Ellipsis disabled/>
                {PaginationNumPage()}
                <Pagination.Ellipsis disabled/>
                <Pagination.Next onClick={ ()=>{handleClick(false)}}/>
            </Pagination>


        </div>
    )
}

export default Paginations