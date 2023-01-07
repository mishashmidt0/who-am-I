import Link from 'next/link';

import { Button } from 'src/components/common/button/button';
import { buttonArr } from 'src/constants/main';
import { MainLayout } from 'src/loyouts/main-layout/main-layout';

export default async function Page() {

  return (
    <MainLayout>
      <main className="container mx-auto pt-12">
        <h1 className="text-center text-3xl font-bold">Кто я? 🧐</h1>

        <div className="flex flex-col items-center gap-8 pt-40">
          {buttonArr.map(({id,title,path})=><Link key={id} href={path}>
            <Button title={title}/>
          </Link>
          )}
        </div>
      </main>
    </MainLayout>
  );
}
