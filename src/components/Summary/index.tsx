import { Container } from "./styles";
import entradasImg from '../../assets/entradas.svg'
import saidasImg from '../../assets/saidas.svg'
import totalImg from '../../assets/total.svg'
import { useContext } from "react";
import { UseTransactions } from "../../hooks/UseTransactions";

export function Summary() {
    const { transactions } = UseTransactions()

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdrawals += transaction.amount
            acc.total -= transaction.amount
        }

        return acc
    }, {
        deposits: 0,
        withdrawals: 0,
        total: 0,
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradasImg} alt="" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidasImg} alt="" />
                </header>
                <strong>-{new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.withdrawals)}</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="" />
                </header>
                <strong>{new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.total)}</strong>
            </div>
        </Container>
    )
}