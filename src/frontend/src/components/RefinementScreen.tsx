import { ScriptNode } from '../types/script';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Filter } from 'lucide-react';

interface RefinementScreenProps {
  node: ScriptNode;
  onNavigate: (node: ScriptNode) => void;
  onBack: () => void;
}

export function RefinementScreen({ node, onNavigate, onBack }: RefinementScreenProps) {
  return (
    <div className="space-y-6">
      <Button
        onClick={onBack}
        variant="ghost"
        className="mb-2"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Terug
      </Button>

      <Card className="border-2 border-accent/30 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-accent/5 to-accent/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Filter className="w-6 h-6 text-accent-foreground" />
            </div>
            <CardTitle className="text-xl">Verfijning</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-lg leading-relaxed text-foreground">
            {node.question || node.diagnosis}
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {node.children?.map((child) => (
          <Button
            key={child.id}
            onClick={() => onNavigate(child)}
            variant="outline"
            className="h-auto py-5 px-5 text-left flex flex-col items-start gap-2 hover:bg-accent/5 hover:border-accent transition-all"
          >
            <span className="font-semibold text-base">{child.title}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
