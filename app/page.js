import TicketCard from "./(components)/TicketCard";

export default function Home() {
  return (
    <div className="lg:p-5">
      <div className="grid lg:grid-cols-3 xl:grid-cols-4">
    <TicketCard/>
    <TicketCard/>

      </div>

    </div>
    
  );
}
