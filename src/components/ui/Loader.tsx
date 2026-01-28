export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      {/* Animated Loader */}
      <div className="relative w-20 h-20 mb-6">
        <div className="absolute inset-0 border-4 border-accent/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-accent rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-transparent border-t-gold-light rounded-full animate-spin" style={{ animationDuration: '0.8s', animationDirection: 'reverse' }}></div>
      </div>
      
      {/* Text */}
      <p className="text-lg font-medium text-foreground mb-2">جاري البحث...</p>
      <p className="text-sm text-muted-foreground">يرجى الانتظار</p>
    </div>
  );
}
