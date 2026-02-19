import { ScriptNavigator } from './components/ScriptNavigator';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-foreground">Verisure Retentie Script</h1>
          <p className="text-sm text-muted-foreground mt-1">Interactieve gespreksgids voor agents</p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-6">
        <ScriptNavigator />
      </main>
      
      <footer className="border-t border-border bg-card mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Verisure Retentie Tool • Built with love using{' '}
            <a 
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
