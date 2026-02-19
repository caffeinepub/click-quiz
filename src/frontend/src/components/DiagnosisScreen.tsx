import { ScriptNode } from '../types/script';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface DiagnosisScreenProps {
  node: ScriptNode;
  onNavigate: (node: ScriptNode) => void;
}

export function DiagnosisScreen({ node, onNavigate }: DiagnosisScreenProps) {
  return (
    <div className="space-y-6">
      <Card className="border-2 border-primary/20 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-xl">Algemene Diagnose</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-lg leading-relaxed text-foreground">
            {node.question}
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        {node.children?.map((child) => (
          <Button
            key={child.id}
            onClick={() => onNavigate(child)}
            variant="outline"
            className="h-auto py-6 px-6 text-left flex flex-col items-start gap-2 hover:bg-primary/5 hover:border-primary transition-all"
          >
            <span className="font-bold text-lg">{child.title}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
