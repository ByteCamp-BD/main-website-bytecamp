'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { BookOpen, Clock, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const courses = [
  {
    id: 1,
    title: 'Basics of Competitive Programming',
    category: 'skill-development',
    description: '  ১ বারই কোর্স কিনুন। C এবং C++ থেকে DSA পর্যন্ত সম্পূর্ণ হাতে-কলমে শেখানো হবে। ',
    duration: '5+ months',
    students: 2400,
    rating: 4.8,
    level: 'Intermediate'
  },
 
  {
    id: 6,
    title: 'Advanced Mathematics',
    category: 'education',
    description: 'Calculus, linear algebra, and discrete mathematics',
    duration: '14 weeks',
    students: 1200,
    rating: 4.8,
    level: 'Advanced'
  },
  {
    id: 7,
    title: 'Business Management',
    category: 'education',
    description: 'Principles of management, strategy, and leadership',
    duration: '10 weeks',
    students: 2100,
    rating: 4.7,
    level: 'Intermediate'
  },
  {
    id: 8,
    title: 'English Communication Skills',
    category: 'education',
    description: 'Improve your written and verbal communication',
    duration: '8 weeks',
    students: 3500,
    rating: 4.6,
    level: 'Beginner'
  }
];

export default function CoursesPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState<string>(categoryParam || 'all');

  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredCourses = activeCategory === 'all'
    ? courses
    : courses.filter(course => course.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/ByteCamp logo.jpg"
                alt="ByteCamp"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-2xl font-bold text-slate-900">ByteCamp</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">Home</Link>
              <Link href="/courses" className="text-slate-900 font-medium">Courses</Link>
              <Link href="/about" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">About</Link>
            </div>
            <Button asChild>
              <Link href="/courses">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Explore Our Courses
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose from our comprehensive catalog of courses in skill development and education
            </p>
          </div>

          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="all">All Courses</TabsTrigger>
              <TabsTrigger value="skill-development">Skill Development</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>

            <TabsContent value={activeCategory} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <Card key={course.id} className="hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-blue-500">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant={course.category === 'skill-development' ? 'default' : 'secondary'}>
                          {course.category === 'skill-development' ? 'Skill Development' : 'Education'}
                        </Badge>
                        <Badge variant="outline">{course.level}</Badge>
                      </div>
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <CardDescription className="text-base">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-slate-600">
                          <Clock className="h-4 w-4 mr-2" />
                          <span className="text-sm">{course.duration}</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                          <Users className="h-4 w-4 mr-2" />
                          <span className="text-sm">{course.students.toLocaleString()} students</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                          <Star className="h-4 w-4 mr-2 fill-amber-400 text-amber-400" />
                          <span className="text-sm font-semibold">{course.rating}</span>
                        </div>
                      </div>
                      <Button className="w-full">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Enroll Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/ByteCamp logo.jpg"
                  alt="ByteCamp"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span className="text-xl font-bold">ByteCamp</span>
              </div>
              <p className="text-slate-400">Empowering learners worldwide with quality education.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/courses" className="hover:text-white transition-colors">Courses</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/courses?category=skill-development" className="hover:text-white transition-colors">Skill Development</Link></li>
                <li><Link href="/courses?category=education" className="hover:text-white transition-colors">Education</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-slate-400">bytecampskill@gmail.com</p>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2026 ByteCamp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
