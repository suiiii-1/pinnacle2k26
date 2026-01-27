import Events from '../../../components/Events';

export default function TechnicalEventsPage() {
  return (
    <Events
      initialCategory="Technical"
      showTabs={false}
      title="Technical Events"
      subtitle="Show your skills across code, design, innovation, and debate tracks."
      sectionId="technical-events"
    />
  );
}
