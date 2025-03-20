import './App.css'
import Heading from './Heading'
import MainContent from './MainContent';

export interface TopPage{
   firstLine:string,phoneNumber:number
}

export interface Trainer{
  trainerName:string;tagName:string;fees?:number
}
export interface TrainerType{

  trainer:Trainer
}
function App() {

  const primaryTrainer:Trainer ={trainerName:'Umesh',tagName:'Mr.Chennai'}
  const personalTrainer:TrainerType ={trainer:primaryTrainer}
  return (
    <>
  <Heading firstLine={'24/7 Fitness Studio'} phoneNumber={982389382}></Heading>
   <MainContent trainer={primaryTrainer}></MainContent>
   {personalTrainer}
    </>
  )
}

export default App
