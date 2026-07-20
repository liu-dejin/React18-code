import BarChart from "./components/BarChart"


const Home = () => {
  return <div>
    <BarChart title={"三大框架满意度"} xData={['React', 'Vue', 'Angular']} />
    <BarChart title={"三大框架使用度"} xData={['React', 'Vue', 'Angular']} />
  </div>
}
export default Home