import { Button } from "@/components/ui/button";

const App: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button variant="outline">Click from shadcn</Button>
    </div>
  );
};

export default App;
