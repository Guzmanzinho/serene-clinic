import logoUrl from '../assets/serene_clinic-logo.png';

export default function Footer() {
  return (
    <footer className="bg-primary-surface border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <img src={logoUrl} alt="Serene Clinic Logo" className="h-40 md:h-56 w-auto mx-auto mb-8 block object-contain grayscale opacity-60" />
        <p className="text-gray-500 font-body text-sm py-2">
          &copy; {new Date().getFullYear()} Serene Clinic. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
