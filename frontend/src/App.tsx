import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AssetRegistration from './components/AssetRegistration';
import AgentTask from './components/AgentTask';
import PaymentsSetup from './components/PaymentsSetup';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <PaymentsSetup />
        <AssetRegistration />
        <AgentTask />
      </main>
      <Footer />
    </div>
  );
};

export default App;
