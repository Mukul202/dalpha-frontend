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

export async function getStaticProps() {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const res = await fetch('https://dalpha-server.herokuapp.com/api/v1/liabilities?id=1084048');
    const data = await res.json();
    console.log(data);
}