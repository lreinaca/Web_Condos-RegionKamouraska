"use client";

interface GoogleCalendarProps {
  title?: string;
  description?: string;
}

export default function GoogleCalendar({ title = "Réservation Chalet", description = "Réserver votre séjour" }: GoogleCalendarProps) {
  const handleGoogleCalendar = () => {
    // Formato de fecha para Google Calendar (YYYYMMDDTHHmmssZ)
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + 1); // Mañana por defecto
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 2); // 2 noches por defecto

    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: title,
      details: description + ' - Chalets Kamouraska',
      location: 'Kamouraska, QC, Canada',
      dates: `${formatDate(startDate)}/${formatDate(endDate)}`,
    });

    window.open(`https://calendar.google.com/calendar/render?${params.toString()}`, '_blank');
  };

  return (
    <button
      onClick={handleGoogleCalendar}
      className="inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
    >
      <svg className="w-6 h-6 transition-transform group-hover:rotate-12" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="40" width="120" height="120" rx="8" fill="#4285F4"/>
        <path d="M100 80V100H120" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="100" cy="100" r="30" stroke="white" strokeWidth="8" fill="none"/>
        <rect x="60" y="40" width="80" height="20" rx="4" fill="#EA4335"/>
        <rect x="60" y="40" width="20" height="20" rx="4" fill="#FBBC04"/>
        <rect x="120" y="40" width="20" height="20" rx="4" fill="#34A853"/>
      </svg>
      <div className="text-left">
        <div className="font-medium text-gray-900">Ajouter à Google Calendar</div>
        <div className="text-xs text-gray-500">Planifier votre séjour</div>
      </div>
    </button>
  );
}
