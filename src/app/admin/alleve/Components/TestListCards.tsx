import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import React from 'react';
import { TestCard } from './TestCard';
import Link from 'next/Link'
interface PropsData {
  data: { name: string; date: string }[];
}

const TestListCards = (props: PropsData) => {
  const { data } = props;

  return (
    <div>
      <div className="relative  md:flex">
        <ScrollArea className="px-4">
          <div className="grid grid-cols-4 gap-4 mx-5 max-md:grid-cols-1">
            {data.map((item, index) => (
                            <Link href="/analytics/${item.name}">

              <TestCard
                key={index} 
                name={item.name}
                date={item.date}
              />
            </Link>

            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default TestListCards;
