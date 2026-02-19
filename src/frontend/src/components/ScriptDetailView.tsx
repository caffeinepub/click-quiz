import { ScriptNode } from '../types/script';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Stethoscope, HelpCircle, Lightbulb, CheckCircle, MessageSquare } from 'lucide-react';

interface ScriptDetailViewProps {
  node: ScriptNode;
  onBack: () => void;
}

export function ScriptDetailView({ node, onBack }: ScriptDetailViewProps) {
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

      <div className="space-y-6">
        {/* Diagnosis Section */}
        {node.diagnosis && (
          <Card className="border-l-4 border-l-chart-1 shadow-md">
            <CardHeader className="bg-chart-1/5">
              <div className="flex items-center gap-3">
                <Stethoscope className="w-5 h-5 text-chart-1" />
                <CardTitle className="text-lg">Diagnose</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-base leading-relaxed whitespace-pre-line">
                {node.diagnosis}
              </p>
            </CardContent>
          </Card>
        )}

        {/* Questions Section */}
        {node.questions && node.questions.length > 0 && (
          <Card className="border-l-4 border-l-chart-2 shadow-md">
            <CardHeader className="bg-chart-2/5">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-chart-2" />
                <CardTitle className="text-lg">3 Vragen</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ol className="space-y-4">
                {node.questions.map((question, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-chart-2/20 text-chart-2 flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </span>
                    <p className="text-base leading-relaxed pt-0.5">
                      {question}
                    </p>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        )}

        {/* Reframing Section */}
        {node.reframing && (
          <Card className="border-l-4 border-l-chart-3 shadow-md">
            <CardHeader className="bg-chart-3/5">
              <div className="flex items-center gap-3">
                <Lightbulb className="w-5 h-5 text-chart-3" />
                <CardTitle className="text-lg">Herkadering</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-base leading-relaxed whitespace-pre-line italic">
                {node.reframing}
              </p>
            </CardContent>
          </Card>
        )}

        {/* Solution Section */}
        {node.solution && (
          <Card className="border-l-4 border-l-chart-4 shadow-md">
            <CardHeader className="bg-chart-4/5">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-chart-4" />
                <CardTitle className="text-lg">Volledige Oplossing</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="prose prose-sm max-w-none">
                <p className="text-base leading-relaxed whitespace-pre-line">
                  {node.solution}
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Closing Question Section */}
        {node.closingQuestion && (
          <Card className="border-l-4 border-l-chart-5 shadow-md">
            <CardHeader className="bg-chart-5/5">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-chart-5" />
                <CardTitle className="text-lg">Sluitvraag</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-base leading-relaxed font-medium">
                {node.closingQuestion}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
