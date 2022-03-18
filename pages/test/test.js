import Chart from '../../components/examples/Chart'
import Title from '../../components/examples/Title'
import Orders from '../../components/examples/Orders'

export default function Home() {
  return (
    <div>
        <Title>
            <h1>Hi there!</h1>
        </Title>
        <br />
        <Chart />
        <br />
        <Orders></Orders>
    </div>
  )
}
