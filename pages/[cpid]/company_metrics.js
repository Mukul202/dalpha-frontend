import { useRouter } from "next/router";
import Dashboard from '../../components/DashboardTemplate'
import MetricsComponent from '../../components/metrics/MetricsComponent'

export default function Company_Metrics() {
    const router = useRouter();
    const cpid = router.query.cpid;
    console.log(cpid);
    return (
      <Dashboard cpid={cpid} activeMenu={"company_metrics"}>
        <MetricsComponent />
      </Dashboard>
    );
}