import DateSelection from "./date-selection";
import HoursSelection from "./hours-selection";
import LocationSelection from "./location-selection";

export default function SearchMobile() {
  return (
    <div className="xl:hidden font-medium">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4">
          <LocationSelection />
          <DateSelection />
          <HoursSelection />
          <div className="flex items-center px-6">
            <button className="btn btn-sm btn-primary w-[264px] mx-auto font-bold">
              Schedule a Pickup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
