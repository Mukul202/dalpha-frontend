import Chart from '../components/Chart'
import Title from '/components/Title'
import Orders from '/components/Orders'

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
