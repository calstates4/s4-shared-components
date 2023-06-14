type OfferingPageProps = {
  title: string;
  url: string;
  editUrl: string;
  department: string;
  description?: string;
  type: string;
  healthSafety?: string;
  focusPopulation: string;
  focusAreas: string;
  subFocusAreas?: string;
  activities: string;
  timeCommitment: string;
  address?: string;
  maxStudents: number;
  requiredLanguages: string;
  preferredLanguages: string;
  startDate: string;
  endDate: string;
  primaryContact: string;
  timeApprovers: string;
  formSigners: string;
  observers: string;
  training: string;
};

export default function OfferingPage({
  title,
  url,
  editUrl,
  department,
  description,
  type,
  healthSafety,
  focusPopulation,
  focusAreas,
  subFocusAreas,
  activities,
  timeCommitment,
  address,
  maxStudents,
  requiredLanguages,
  preferredLanguages,
  startDate,
  endDate,
  primaryContact,
  timeApprovers,
  formSigners,
  observers,
  training,
}: OfferingPageProps) {
  return <h1>Hi</h1>
}
