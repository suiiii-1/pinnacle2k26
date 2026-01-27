import Events from '../../../components/Events';

export default function NonTechnicalEventsPage() {
  return (
    <Events
      initialCategory="Non Technical"
      showTabs={false}
      title="Non Technical Events"
      subtitle="Experience high-energy games and showcase events beyond tech."
      sectionId="non-technical-events"
    />
  );
}
