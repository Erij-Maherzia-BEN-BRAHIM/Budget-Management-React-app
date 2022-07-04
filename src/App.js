import './App.css';

import DepensesListe from './components/DepensesListe';
import 
DepenseForm from './components/DepenseForm';
import Card from './components/Card';
import FilterYearProvider from './store/FilterDateContext';

function App() {

  return (
    <>
      <Card>
        <FilterYearProvider>
          <DepenseForm></DepenseForm>

          <DepensesListe></DepensesListe>
        </FilterYearProvider>

      </Card>
    </>
  );
}

export default App;
