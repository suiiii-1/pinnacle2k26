import Events from '../../../components/Events';

export default function OnlineEventsPage() {
  return (
    <Events
      initialCategory="Online"
      showTabs={false}
      title="Online Events"
      subtitle="Compete remotely with creative and digital-first challenges."
      sectionId="online-events"
    />
  );
}
