// import { Button } from '@/components/ui/button';
import PatientForm from '@/components/forms/PatientForm';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="patient"
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
          />
          <PatientForm />
        </div>
      </section>
    </div>
  );
}