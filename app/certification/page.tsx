import { Metadata } from 'next';
import Link from 'next/link';
import { Award, CheckCircle, TrendingUp, ArrowRight } from 'lucide-react';
import { PageTitle } from '@/components/common';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { certifications } from '@/data/certifications';

export const metadata: Metadata = {
  title: '자격증안내',
  description: '요양보호사, 노인체육지도사 등 취득 가능한 자격증을 안내합니다.',
};

export default function CertificationPage() {
  return (
    <>
      <PageTitle
        title="자격증안내"
        description="제2의 인생을 위한 자격증 취득을 도와드립니다"
        breadcrumb={[{ label: '자격증안내' }]}
      />

      <div className="container mx-auto px-4 py-12">
        {/* 자격증 목록 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <Card key={cert.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="bg-muted/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Award className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-bold">{cert.name}</h3>
                  </div>
                  <Badge variant={cert.type === 'national' ? 'default' : 'secondary'}>
                    {cert.type === 'national' ? '국가자격' : '민간자격'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="text-muted-foreground">{cert.description}</p>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <strong>대상:</strong> {cert.targetAudience}
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <strong>교육기간:</strong> {cert.duration}
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <strong>교육비:</strong>{' '}
                      {cert.fee === 0 ? '무료' : `${cert.fee.toLocaleString()}원`}
                    </div>
                  </div>
                </div>

                {/* 취업률 */}
                <div className="bg-primary/10 rounded-xl p-4 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">수료생 취업률</p>
                    <p className="text-xl font-bold text-primary">{cert.employmentRate}</p>
                  </div>
                </div>

                {/* 혜택 */}
                <div>
                  <h4 className="font-bold mb-2">취득 후 혜택</h4>
                  <ul className="space-y-1">
                    {cert.benefits.map((benefit, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/contact">
                    상담 신청
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* 안내 */}
        <div className="mt-12 bg-muted rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">자격증 취득 상담</h3>
          <p className="text-muted-foreground mb-6">
            어떤 자격증이 적합한지 고민되시나요?<br />
            센터 담당자가 맞춤 상담을 도와드립니다.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg">
              <Link href="/contact">상담 신청하기</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/certification/process">취득 절차 안내</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
