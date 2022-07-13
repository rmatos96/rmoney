import { UseTransactions } from "../../hooks/UseTransactions";
import { Container } from "./styles";

export function TransactionsTable() {
    const { transactions } = UseTransactions()

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>
                                {transaction.title}
                            </td>

                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-br', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>

                            <td>
                                {transaction.category}
                            </td>

                            <td>
                                {new Intl.DateTimeFormat('pt-br').format(new Date(transaction.createdAt))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}