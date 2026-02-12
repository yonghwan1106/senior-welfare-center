import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Megaphone, Image as ImageIcon, FileText, ArrowRight } from 'lucide-react';

export default function CommunityPage() {
    const menuItems = [
        {
            title: '공지사항',
            description: '센터의 주요 소식과 알림을 확인하세요.',
            icon: Megaphone,
            href: '/community/notice',
            color: 'text-blue-500',
            bgColor: 'bg-blue-50',
        },
        {
            title: '갤러리',
            description: '센터의 다양한 활동 모습을 사진으로 만나보세요.',
            icon: ImageIcon,
            href: '/community/gallery',
            color: 'text-green-500',
            bgColor: 'bg-green-50',
        },
        {
            title: '자료실',
            description: '다양한 문서 서식과 자료를 다운로드할 수 있습니다.',
            icon: FileText,
            href: '/community/resources',
            color: 'text-orange-500',
            bgColor: 'bg-orange-50',
        },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">커뮤니티</h1>
                    <p className="text-muted-foreground text-lg">
                        노인단체의 소통 공간입니다. 다양한 소식과 이야기를 나눠보세요.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {menuItems.map((item) => (
                        <Link key={item.href} href={item.href} className="group">
                            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <CardHeader>
                                    <div className={`w-12 h-12 rounded-lg ${item.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <item.icon className={`w-6 h-6 ${item.color}`} />
                                    </div>
                                    <CardTitle className="text-xl mb-2 flex items-center justify-between">
                                        {item.title}
                                        <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        {item.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
