import { useRouter } from "next/router";
import Dashboard from '../../components/DashboardTemplate'
import FinanceComponent from '../../components/finance/FinanceComponent'

export default function Company_Finance() {
    const router = useRouter();
    const cpid = router.query.cpid;
    console.log(cpid);
    return (
      <Dashboard cpid={cpid} activeMenu={"company_finances"}>
        <FinanceComponent />
      </Dashboard>
    );
}