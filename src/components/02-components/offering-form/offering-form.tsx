/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControlLabel,
  FormControl,
  InputLabel,
  FormGroup,
  Checkbox,
  Paper,
  Switch,
  TextField,
  Typography,
  useTheme, Select,
} from '@mui/material';
import React, { ChangeEvent, ElementType, useRef, useState, useEffect } from 'react';
import { checkRequiredFormFieldsTabs as onClickHandler } from '../../../lib/utils';
import Breadcrumbs from '../../01-elements/breadcrumbs/breadcrumbs';
import Link from '../../01-elements/link/link';
import AddressField, { AddressType } from '../address-field/address-field';
import AutocompleteField, {
  type AutocompleteOptionType,
} from '../autocomplete-field/autocomplete-field';
import AutocompletesDependecyFields, {
  type AutocompleteDependencyOptionType,
} from '../autocompletes-dependecy-fields/autocompletes-dependecy-fields';
import Tabs, { type RefHandler } from '../tabs/tabs';
import ParticipationRequirements , { type ParticipationRequirementsProps } from '../participation-requirements/participation-requirements';
import StudentsInformation , { type StudentsInformationProps } from '../students-information/students-information';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AutocompleteFieldNoDropdown, { AutocompleteOptionTypeNoDropdown } from '../autocomplete-field-no-dropdown/autocomplete-field-no-dropdown';

const OFFERING_TYPES = [
  { value: 'on-site', label: 'On-site' },
  { value: 'remote', label: 'Remote' },
  { value: 'hybrid', label: 'Hybrid' },
  { value: 'negotiable', label: 'Negotiable' },
];

const OFFERING_TIME_UNITS = [
  { value: 'hours', label: 'Hour(s)' },
  { value: 'days', label: 'Day(s)' },
  { value: 'weeks', label: 'Week(s)' },
  { value: 'years', label: 'Year(s)' },
];

const OFFERING_TIME_FREQUENCY = [
  { value: 'not-recurring', label: 'Not recurring' },
  { value: 'day', label: 'Per day' },
  { value: 'week', label: 'Per week' },
  { value: 'month', label: 'Per month' },
  { value: 'year', label: 'Per year' },
];

const PAY_TYPE = [
  { value: 1, label: 'Hourly Pay' },
  { value: 2, label: 'Stipend' },
  { value: 3, label: 'Expense Reimbursement' },
  { value: 4, label: 'Other (please explain)' },
];

const PAY_FREQUENCY = [
  { value: 'weekly', label: 'weekly' },
  { value: 'biweekly', label: 'bi-weekly' },
  { value: 'monthly', label: 'monthly' },
  { value: 'scheduled', label: 'scheduled' },
  { value: 'once', label: 'once' },
];

export type OfferingFormProps = {
  isEdit?: boolean;
  cancelUrl?: string;
  duplidateUr?: string;
  breadcrumb: {
    title: string;
    url: string;
  }[];
  departments?: AutocompleteOptionType[];
  addressType?: string;
  address?: AddressType;
  primaryContacts?: AutocompleteOptionType[];
  timeApprovers?: AutocompleteOptionType[];
  formSigners?: AutocompleteOptionType[];
  observers?: AutocompleteOptionType[];
  preferredLanguages?: AutocompleteDependencyOptionType[];
  requiredLanguages?: AutocompleteDependencyOptionType[];
  focusPopulations?: AutocompleteOptionType[];
  focusAreas?: AutocompleteOptionType[];
  subFocusAreas?: AutocompleteOptionType[];
  activities?: AutocompleteOptionType[];
  requirements?: AutocompleteOptionType[];
  offeringCampus?: AutocompleteOptionTypeNoDropdown[];
  FormElement?: ElementType;
  defaultName?: string;
  defaultRequiresApproval?: boolean;
  defaultApplicationInstructions?: string;
  defaultDepartment?: string;
  defaultOfferingType?: string;
  defaultMaxStudents?: number;
  defaultStartDate?: string;
  defaultEndDate?: string;
  defaultApplicationStartDate?: string;
  defaultApplicationEndDate?: string;
  defaultPrimaryContact?: string;
  defaultTimeApprovers?: string[];
  defaultFormSigners?: string[];
  defaultObservers?: string[];
  defaultPreferredLanguages?: string[];
  defaultRequiredLanguages?: string[];
  defaultDescription?: string;
  defaultHealthSafetyInformation?: string;
  defaultTraining?: string;
  defaultFocusPopulations?: string[];
  defaultFocusAreas?: string[];
  defaultSubFocusAreas?: string[];
  defaultActivities?: string[];
  defaultRequirements?: string[];
  defaultSupervision?: string;
  defaultTimeAmount?: number;
  defaultTimeUnit?: string;
  defaultTimeFrequency?: string;
  defaultPublished?: boolean;
  defaultPayType?: string;
  defaultPayFrequency?: string;
  defaultPayAmount?: number;
  emailStudentSelected?: string;
  defaultOfferingCampus?: string

  expectedSkillAcquisition?: string;
  safetyConsiderations?: string[];
  knownHazardsComments?: string;
  populationServedComments?: string;
  siteLocationComments?: string;
  supervisionComments?: string;
  requirementTypes?: {
    id: string;
    label: string;
  }[];
  participationRequirement?: ParticipationRequirementsProps[];
  studentsInformation?: StudentsInformationProps[];
};

export default function OfferingForm({
  isEdit = false,
  cancelUrl,
  duplidateUr,
  breadcrumb,
  departments,
  addressType,
  address,
  primaryContacts,
  timeApprovers,
  formSigners,
  observers,
  preferredLanguages,
  focusPopulations,
  focusAreas,
  subFocusAreas,
  activities,
  requirements,
  FormElement,
  defaultName,
  defaultRequiresApproval,
  defaultApplicationInstructions,
  defaultDepartment,
  defaultPrimaryContact,
  defaultTimeApprovers,
  defaultFormSigners,
  defaultObservers,
  defaultPreferredLanguages,
  defaultRequiredLanguages,
  defaultOfferingType,
  defaultMaxStudents,
  defaultStartDate,
  defaultEndDate,
  defaultApplicationStartDate,
  defaultApplicationEndDate,
  defaultDescription,
  defaultFocusPopulations,
  defaultFocusAreas,
  defaultSubFocusAreas,
  defaultActivities,
  defaultRequirements,
  defaultTimeAmount,
  defaultTimeUnit,
  defaultTimeFrequency,
  defaultPayType,
  defaultPayFrequency,
  defaultPayAmount,
  defaultPublished,
  emailStudentSelected,
  expectedSkillAcquisition,
  safetyConsiderations,
  knownHazardsComments,
  populationServedComments,
  siteLocationComments,
  supervisionComments,
  requirementTypes,
  participationRequirement,
  studentsInformation,
  offeringCampus,
  defaultOfferingCampus,
}: OfferingFormProps) {
  const theme = useTheme();
  const tabRef = useRef<RefHandler>(null);
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [applicationstartDate, setApplicationStartDate] = useState(defaultApplicationStartDate);
  const [requiresApproval, setRequiresApproval] = useState(
    defaultRequiresApproval,
  );

  const [geoLocation, setGeoLocation] = useState<{ latitude: number | null; longitude: number | null }>({
    latitude: null,
    longitude: null,
  });

  const [addressState, setAddressState] = useState<AddressType>({
    streetAddress1: address?.streetAddress1 || '',
    streetAddress2: address?.streetAddress2 || '',
    city: address?.city || '',
    state: address?.state || '',
    zipCode: address?.zipCode || '',
    country: address?.country || 'US',
  });

  const [isKnownHazards, setIsKnownHazards] = useState(safetyConsiderations?.includes('known_hazards'));
  function khChangeHandler() {
    setIsKnownHazards(!isKnownHazards);
  }
  const [isPopulationServed, setIsPopulationServed] = useState(safetyConsiderations?.includes('population_served'));
  function psChangeHandler() {
    setIsPopulationServed(!isPopulationServed);
  }

  const [isStudentsSelected, setisStudentsSelected] = useState(emailStudentSelected === "1" ? true : false);

  function ssChangeHandler() {
    setisStudentsSelected(!isStudentsSelected);
  }

  const [isSiteLocation, setIsSiteLocation] = useState(safetyConsiderations?.includes('site_location'));
  function slChangeHandler() {
    setIsSiteLocation(!isSiteLocation);
  }
  const [isSupervision, setIsSupervision] = useState(safetyConsiderations?.includes('supervision'));
  function supervisionChangeHandler() {
    setIsSupervision(!isSupervision);
  }

  const [isNone, setIsNone] = useState(safetyConsiderations?.includes('none'));
  function noneChangeHandler() {
    setIsNone(!isNone);
  }

  const [isRemote, setIsRemote] = useState(addressType === 'remote_online' ? true : false);

  const remoteHandler = (ev:any) => {
    if (ev.target.value === 'remote_online') {
      setIsRemote(true);
    } else {
      setIsRemote(false);
    }
  }

  // Requirements and Fees display by toggling the switch
  const [displayRequirementsFees, setDisplayRequirementsFees] = useState(false);

  function displayChangeHandler() {
    setDisplayRequirementsFees(!displayRequirementsFees);
  }

  // auto-incrementing id for requirements and fees fields
  const [sFields, setSFields] = useState(participationRequirement);

  // auto-incrementing id for students information fields
  const [sStudentsFields, setSStudentsFields] = useState(studentsInformation);

  const [initialRowCount, setInitialRowCount] = useState(0);

  // useEffect to set initial row count when the component mounts
  useEffect(() => {
    setInitialRowCount(sFields?.length ?? 0);
    setInitialRowCount(sStudentsFields?.length ?? 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Remove fields by index
  const removeElement = (idx: number) => {
    const data = [...sFields as []];
    data.splice(idx, 1);
    setSFields(data);
  };

  const removeStudentElement = (idx: number) => {
    const data = [...sStudentsFields as []];
    data.splice(idx, 1);
    setSStudentsFields(data);
  };

  // Add fields by index
  const addElement = () => {
    const newFields = {
      id: 'new',
      requirement_type: '',
      requirements_fee: '',
      requirements_cost: '',
      requirement_types: requirementTypes,
    }

    setSFields([...sFields as [], newFields]);
  };

  const addStudentsElement = () => {
    const newFields = {
      id: 'new',
      student_email: '',
      student_name: '',
    }

    setSStudentsFields([...sStudentsFields as [], newFields]);
  };

  // Styles.
  const paperStyles = {
    p: theme.spacing(3),
    mb: theme.spacing(3),
    fontSize: '1rem',
  };

  const titleStyles = {
    color: 'primary.main',
    mb: theme.spacing(2),
  };

  const formFieldStyles = {
    mb: theme.spacing(3),
    display: 'block',

    '& .MuiFormLabel-root:not(.Mui-focused)': {
      color: '#000000CC',
    }
  };

  const studentSelected = {
    mb: theme.spacing(3),
    display: 'block',
  };

  const rightSpace = {
    mr: theme.spacing(1)
  }

  const actionButtonsContainerStyles = {
    display: 'flex',
    gap: theme.spacing(1),
    flexWrap: 'wrap',
  };

  const fieldSetStyles = {
    pt: theme.spacing(3),
    pl: theme.spacing(3),
    pr: theme.spacing(3),
    mb: theme.spacing(3),
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: theme.spacing(1),
  };

  const hlpText = {
    fontWeight: 100,
    fontSize: 14,
    pl: theme.spacing(2),
  };

  const accordionStyles = {
    mb: theme.spacing(3),
  };

  function handleStartDateOnChange(event: ChangeEvent<HTMLInputElement>) {
    setStartDate(event.target.value);
  }

  function handleApplicationStartDateOnChange(event: ChangeEvent<HTMLInputElement>) {
    setApplicationStartDate(event.target.value);
  }

  function onChangeRequiresApprovalHandler(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    setRequiresApproval(event.target.checked);
  }

  useEffect(() => {
    if (geoLocation.latitude && geoLocation.longitude) {
      const latitudeInput = document.getElementById('offering-latitude') as HTMLInputElement;
      const longitudeInput = document.getElementById('offering-longitude') as HTMLInputElement;

      if (latitudeInput && longitudeInput) {
        latitudeInput.value = geoLocation.latitude.toString();
        longitudeInput.value = geoLocation.longitude.toString();
      }
    }
  }, [geoLocation]);

  const handleAddressChange = (updatedAddress: Partial<AddressType>) => {
    setAddressState((prev) => {
      const newAddress = { ...prev, ...updatedAddress };

      // Si todos los campos de dirección están vacíos, reseteamos la geolocalización
      if (!newAddress.streetAddress1 && !newAddress.city && !newAddress.zipCode) {
        setGeoLocation({ latitude: null, longitude: null });
      }

      return newAddress;
    });
  };

  const [errors, setErrors] = useState({
    offeringName: false,
    offeringDescription: false,
    offeringActivities: false,
    offeringPrimaryContact: false,
    offeringTimeApprovers: false,
    offeringFormSigners: false,
    offeringApplicationInstructions: false,
    offeringStartDate: false,
    offeringEndDate: false,
    offeringTimeAmount: false,
    offeringPayAmount: false,
    offeringFocusPopulations: false,
    offeringFocusAreas: false,
    offeringStreetAddress: false,
    offeringCity: false,
    offeringZipcode: false,
    offeringState: false,
    latitude: false,
    longitude: false,
  });

  useEffect(() => {
    if (addressState.streetAddress1 && addressState.city && addressState.state && addressState.zipCode) {
      getCoordinates(addressState.streetAddress1, addressState.city, addressState.state, addressState.zipCode)
        .then((coords) => {
          if (coords) {
            setGeoLocation(coords);
          }
        });
    }
  }, [addressState]);

  const handleSubmit = async(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const offeringNameValue = (document.getElementById('offering-name') as HTMLInputElement)?.value;
    const offeringDescriptionValue = (document.getElementById('offering-description') as HTMLInputElement)?.value;
    // Extract chips for Activities
    const offeringActivitiesValues = Array.from(
      document.querySelectorAll('#offering-activities-label ~ .MuiAutocomplete-inputRoot .MuiChip-label')
    ).map((chip) => chip.textContent?.trim());
    const offeringPrimaryContactValue = (document.getElementById('offering-primary-contact') as HTMLInputElement)?.value;
    const offeringTimeApproversValue = Array.from(
      document.querySelectorAll('#offering-time-approvers-label ~ .MuiAutocomplete-inputRoot .MuiChip-label')
    ).map((chip) => chip.textContent?.trim());
    const offeringFormSignersValue = Array.from(
      document.querySelectorAll('#offering-form-signers-label ~ .MuiAutocomplete-inputRoot .MuiChip-label')
    ).map((chip) => chip.textContent?.trim());
    const offeringApplicationInstructionsValue = (document.getElementById('offering-application-instructions') as HTMLInputElement)?.value;
    const startDateValue = (document.getElementById('offering-start-date') as HTMLInputElement)?.value;
    const offeringEndDateValue = (document.getElementById('offering-end-date') as HTMLInputElement)?.value;
    const offeringTimeAmountValue = (document.getElementById('offering-time-amount') as HTMLInputElement)?.value;
    const offeringPayAmountValue = (document.getElementById('offering-pay-amount') as HTMLInputElement)?.value;
    const offeringStudentSelected = (document.getElementById('offering-student-selected') as HTMLInputElement)?.value;
    // Extract chips for Focus Population(s)
    const offeringFocusPopulationsValues = Array.from(
      document.querySelectorAll('#offering-focus-populations-label ~ .MuiAutocomplete-inputRoot .MuiChip-label')
    ).map((chip) => chip.textContent?.trim());
    // Extract chips for Focus Area(s)
    const offeringFocusAreasValues = Array.from(
      document.querySelectorAll('#offering-focus-areas-label ~ .MuiAutocomplete-inputRoot .MuiChip-label')
    ).map((chip) => chip.textContent?.trim());

    // AddressFields
    const offeringStreetAddressValue = (document.getElementById('offering-street-address1') as HTMLInputElement)?.value;
    const offeringCityValue = (document.getElementById('offering-city') as HTMLInputElement)?.value;
    const offeringZipCode = (document.getElementById('offering-zipcode') as HTMLInputElement)?.value;
    const offeringAddressState = (document.getElementById('offering-address-state') as HTMLInputElement)?.value;
    const offeringAddressCountry = (document.getElementById('offering-address-country') as HTMLInputElement)?.value;

    // Coordinates
    const latitudeInput = document.getElementById('offering-latitude') as HTMLInputElement;
    const longitudeInput = document.getElementById('offering-longitude') as HTMLInputElement;


    const latitudeValue = latitudeInput?.value;
    const longitudeValue = longitudeInput?.value;

    const errors = {
      offeringName: offeringNameValue === '',
      offeringDescription: offeringDescriptionValue === '',
      offeringActivities: offeringActivitiesValues.length === 0,
      offeringPrimaryContact: offeringPrimaryContactValue === '',
      offeringTimeApprovers: offeringTimeApproversValue.length === 0,
      offeringFormSigners: offeringFormSignersValue.length === 0,
      offeringApplicationInstructions: offeringApplicationInstructionsValue === '',
      offeringStartDate: startDateValue === '',
      offeringEndDate: offeringEndDateValue === '',
      offeringTimeAmount: offeringTimeAmountValue === '',
      offeringPayAmount: offeringPayAmountValue === '',
      offeringStudentSelected: offeringStudentSelected === '',
      offeringFocusPopulations: offeringFocusPopulationsValues.length === 0,
      offeringFocusAreas: offeringFocusAreasValues.length === 0,
    };

     // Check if country is "none"
    const isAddressRequired = offeringAddressCountry !== 'none';

    const addressErrors = {
      ...errors,
      offeringStreetAddress: isAddressRequired && offeringStreetAddressValue === '',
      offeringCity: isAddressRequired && offeringCityValue === '',
      offeringZipcode: isAddressRequired && offeringZipCode === '',
      offeringState: isAddressRequired && offeringAddressState === '',
      latitude: isAddressRequired && (!latitudeValue || latitudeValue === ''),
      longitude: isAddressRequired && (!longitudeValue || longitudeValue === ''),
    };

    setErrors(addressErrors);

    const scrollToInvalidField = (field: HTMLElement) => {
      const container = document.querySelector('main') || window;
      const rect = field.getBoundingClientRect();

      const offsetTop =
        container === window
          ? window.scrollY + rect.top - 200
          : (container as HTMLElement).scrollTop + rect.top - 200;

      (container as Window | HTMLElement).scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });

      setTimeout(() => {
        if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement || field instanceof HTMLSelectElement) {
          field.focus();
          field.form?.reportValidity();
        }
      }, 300);
    };

    if (Object.values(addressErrors).some((error) => error)) {
      event.preventDefault();

      const form = (event.target as HTMLButtonElement).form;
      if (form) {
        const firstInvalidInput = form.querySelector(':invalid') as HTMLElement;

        if (firstInvalidInput) {
          // Tab management
          const parentTab = firstInvalidInput.closest('[aria-label]');
          const currentTab = document.querySelector('.MuiTab-root.Mui-selected');

          if (parentTab && currentTab?.textContent !== parentTab.getAttribute('aria-label')) {
            // Switch to the correct tab
            const targetTabButton = Array.from(document.querySelectorAll('.MuiTab-root')).find(
              (tab) => tab.textContent === parentTab.getAttribute('aria-label')
            );

            if (targetTabButton) {
              (targetTabButton as HTMLElement).click();
            }

            // Wait for the tab to render
            setTimeout(() => {
              scrollToInvalidField(firstInvalidInput);
            }, 300);
          } else {
            scrollToInvalidField(firstInvalidInput);
          }

          // Accordion handling
          const accordion = firstInvalidInput.closest('.MuiAccordion-root') as HTMLElement;
          if (accordion) {
            const isExpanded = accordion.classList.contains('Mui-expanded');
            if (!isExpanded) {
              const accordionSummary = accordion.querySelector('.MuiAccordionSummary-root') as HTMLElement;
              if (accordionSummary) {
                accordionSummary.click();
              }
            }
          }
        }
      }
    }
  };

  // Nominatim Implementation
  async function getCoordinates(
    street: string,
    city: string,
    state: string,
    zip: string
  ): Promise<{ latitude: number; longitude: number } | null> {
    if (!street || !city || !state || !zip) return null;

    const query = `${street}, ${city}, ${state}, ${zip}, USA`;
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`;

    try {
      const response = await fetch(url, {
        headers: {
          "User-Agent": "OfferingFormApp", // Nominatim requiere un user-agent
        },
      });
      const data = await response.json();

      if (data.length > 0) {
        return {
          latitude: parseFloat(data[0].lat),
          longitude: parseFloat(data[0].lon),
        };
      }

      return null;
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      return null;
    }
  }

  // Render.
  const formInner = (
    <>
      <Tabs
        name="Offering form tabs"
        id="offering-form"
        tabPanelClassName="offering-form-panel"
        ref={tabRef}
      >
        <div aria-label="Offering Details">
          <Box component="fieldset" sx={fieldSetStyles}>
            <legend>General Information</legend>
            <TextField
              autoFocus
              required
              fullWidth
              id="offering-name"
              name="offering-name"
              label="Offering Title"
              defaultValue={defaultName ?? undefined}
              sx={formFieldStyles}
              onChange={event => setErrors({...errors, offeringName: event.target.value === ''})}
              error={errors.offeringName}
              helperText={errors.offeringName ? "This field is required" : ""}
            />
            <TextField
              required
              fullWidth
              multiline
              maxRows={4}
              id="offering-description"
              name="offering-description"
              label="Offering Description"
              defaultValue={defaultDescription ?? undefined}
              sx={formFieldStyles}
              onChange={event => setErrors({...errors, offeringDescription: event.target.value === ''})}
              error={errors.offeringDescription}
              helperText={errors.offeringDescription ? "This field is required" : ""}
            />
            <TextField
              select
              required
              id="offering-type"
              name="offering-type"
              label="Offering Type"
              defaultValue={defaultOfferingType ?? undefined}
              InputLabelProps={{
                shrink: true,
              }}
              SelectProps={{
                native: true,
              }}
              sx={formFieldStyles}
            >
              {OFFERING_TYPES.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            {offeringCampus && (
              <AutocompleteFieldNoDropdown
                id="offering-campus"
                name="offering-campus"
                label="Offering Campus"
                options={offeringCampus}
                selected={defaultOfferingCampus}
                sx={formFieldStyles}
                required = {isStudentsSelected}
              />
            )}
            <Box component="fieldset" sx={fieldSetStyles}>
              <legend>Selected students</legend>
              <FormControlLabel
                control={
                  <Switch
                    onChange={ssChangeHandler}
                    checked={isStudentsSelected}
                    id="offering-student-selected"
                    name="offering-student-selected"
                  />
                }
                sx={studentSelected}
                label="Has a student been selected?"
              />

              {isStudentsSelected && (
                <Accordion defaultExpanded={true} sx={accordionStyles}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'primary.dark' }} />}
                  >
                    Students Information
                  </AccordionSummary>
                  <AccordionDetails>
                    {sStudentsFields &&
                      sStudentsFields.map((item: any, idx: number) => (
                        <div
                          key={idx}
                          style={{
                            display: 'flex',
                            marginBottom: '1rem',
                          }}
                        >
                          <input
                            type="hidden"
                            name={'students-information'}
                            value={item.id}
                          />
                          <StudentsInformation
                            id={item.id}
                            student_name={item.student_name}
                            student_email={item.student_email}
                          />
                          <Button
                            onClick={() => removeStudentElement(idx)}
                            variant={'text'}
                            aria-label="Remove student button"
                          >
                            <DeleteOutlinedIcon sx={{ color: 'primary.dark' }} />
                          </Button>
                        </div>
                      ))}
                    <Button onClick={addStudentsElement} variant={'contained'}>
                      Add {sStudentsFields?.length ?? 0 > 0 ? 'more students' : 'students'}
                    </Button>
                  </AccordionDetails>
                </Accordion>
              )}
            </Box>

            <TextField
              required
              type="number"
              id="offering-max-students"
              name="offering-max-students"
              label="Maximum number of students"
              defaultValue={defaultMaxStudents ?? 0}
              helperText="Use 0 for unlimited"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 1,
                min: 0,
              }}
              sx={formFieldStyles}
            />
            {preferredLanguages && (
              <AutocompletesDependecyFields
                multiple
                multiple2
                id="offering-preferred-languages"
                name="offering-preferred-languages"
                label="Preferred language(s)"
                options={preferredLanguages}
                selected={defaultPreferredLanguages}
                sx={formFieldStyles}
                id2="offering-required-languages"
                name2="offering-required-languages"
                label2="Required language(s)"
                options2={preferredLanguages}
                selected2={defaultRequiredLanguages}
              />
            )}
            {requirements && (
              <AutocompleteField
                multiple
                id="offering-requirements"
                name="offering-requirements"
                label="Preferred/Required Skills and Knowledge"
                options={requirements}
                selected={defaultRequirements}
                sx={formFieldStyles}
              />
            )}
            {activities && (
              <AutocompleteField
                multiple
                required
                id="offering-activities"
                name="offering-activities"
                label="Activities"
                helptext="Please select the tasks/activities students would be doing for this offering (select all that apply; you can type key words which will then highlight activity options for selection)"
                options={activities}
                selected={defaultActivities}
                sx={formFieldStyles}
                error={errors.offeringActivities}
                onChange={event => setErrors({...errors, offeringActivities: (event.target as HTMLInputElement).value.length === 0})}
              />
            )}
            <TextField
              fullWidth
              multiline
              maxRows={4}
              id="offering-expected-skills"
              name="offering-expected-skills"
              label="Expected Skill Acquisition"
              defaultValue={expectedSkillAcquisition ?? undefined}
              InputLabelProps={{
                shrink: true,
              }}
              sx={formFieldStyles}
              helperText="Share the skills or knowledge students can expect to gain from this experience (i.e., what are the learning outcomes)."
            />
          </Box>

          <Box component="fieldset" sx={fieldSetStyles}>
            <legend>Offering Supervision</legend>
            <Typography sx={formFieldStyles}>
              Only active staff members with an account can be selected.
            </Typography>
            {primaryContacts && (
              <AutocompleteField
                required
                id="offering-primary-contact"
                name="offering-primary-contact"
                label="Primary Contact"
                options={primaryContacts}
                selected={defaultPrimaryContact}
                sx={formFieldStyles}
                error={errors.offeringPrimaryContact}
                helptext={errors.offeringPrimaryContact ? "This field is required" : ""}
                onChange={event => setErrors({...errors, offeringPrimaryContact: (event.target as HTMLInputElement).value.length === 0})}
              />
            )}
            {timeApprovers && (
              <AutocompleteField
                multiple
                required
                id="offering-time-approvers"
                name="offering-time-approvers"
                label="Time Approver(s)"
                options={timeApprovers}
                selected={defaultTimeApprovers}
                sx={formFieldStyles}
                error={errors.offeringTimeApprovers}
                helptext={errors.offeringTimeApprovers ? "This field is required" : ""}
                onChange={event => setErrors({...errors, offeringTimeApprovers: (event.target as HTMLInputElement).value.length === 0})}
              />
            )}
            {formSigners && (
              <AutocompleteField
                multiple
                required
                id="offering-form-signers"
                name="offering-form-signers"
                label="Form Signer(s)"
                options={formSigners}
                selected={defaultFormSigners}
                sx={formFieldStyles}
                error={errors.offeringFormSigners}
                helptext={errors.offeringFormSigners ? "This field is required" : ""}
                onChange={event => setErrors({...errors, offeringFormSigners: (event.target as HTMLInputElement).value.length === 0})}
              />
            )}
            {observers && (
              <AutocompleteField
                multiple
                id="offering-observers"
                name="offering-observers"
                label="Observer(s)"
                options={observers}
                selected={defaultObservers}
                sx={formFieldStyles}
              />
            )}
          </Box>

          <Box component="fieldset" sx={fieldSetStyles}>
            <legend>Requirements and Fees</legend>
            <Typography variant="body1" gutterBottom>
              Please identify all requirements and/or anticipated fees
              associated with this offering. Additionally, if the amount of the
              fee and the cost covered by your organization, is known, please
              specify. This information will be shared with students. Each
              requirement should have its own row.
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  onChange={displayChangeHandler}
                  checked={displayRequirementsFees}
                />
              }
              label="No participation requirements for this offering"
            />
            {!displayRequirementsFees && (
              <Accordion defaultExpanded={true} sx={accordionStyles}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: 'primary.dark' }} />}
                >
                  Requirements and Fees
                </AccordionSummary>
                <AccordionDetails>
                  {sFields &&
                    sFields.map((item: any, idx: number) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          marginBottom: '1rem',
                        }}
                      >
                        <input
                          type="hidden"
                          name={'participation-requirement'}
                          value={item.id}
                        />
                        <ParticipationRequirements
                          id={item.id}
                          requirement_type={item.requirement_type}
                          requirements_fee={item.requirements_fee}
                          requirements_cost={item.requirements_cost}
                          requirement_types={item.requirement_types}
                        />
                        <Button
                          onClick={() => removeElement(idx)}
                          variant={'text'}
                          aria-label="Remove requirement button"
                        >
                          <DeleteOutlinedIcon sx={{ color: 'primary.dark' }} />
                        </Button>
                      </div>
                    ))}
                  <Button onClick={addElement} variant={'contained'}>
                    Add {sFields?.length ?? 0 > 0 ? 'another' : 'a'} requirement
                  </Button>
                </AccordionDetails>
              </Accordion>
            )}
          </Box>

          <Box component="fieldset" sx={fieldSetStyles}>
            <Typography component="p" sx={hlpText}>
              Please review the health and safety considerations list below and
              check the box if any are associated with this offering; you will
              be required to provide additional information based on your
              selections. This information will be shared with students.
            </Typography>
            <FormGroup sx={formFieldStyles}>
              <FormControlLabel
                name="offering-safety-considerations"
                value="known_hazards"
                control={
                  <Checkbox
                    value="known_hazards"
                    onChange={khChangeHandler}
                    checked={isKnownHazards}
                  />
                }
                label="Known Hazards"
              />
              <FormControlLabel
                name="offering-safety-considerations"
                value="population_served"
                control={
                  <Checkbox
                    value="population_served"
                    onChange={psChangeHandler}
                    checked={isPopulationServed}
                  />
                }
                label="Population Served"
              />
              <FormControlLabel
                name="offering-safety-considerations"
                value="site_location"
                control={
                  <Checkbox
                    value="site_location"
                    onChange={slChangeHandler}
                    checked={isSiteLocation}
                  />
                }
                label="Site Location"
              />
              <FormControlLabel
                name="offering-safety-considerations"
                value="supervision"
                control={
                  <Checkbox
                    value="supervision"
                    onChange={supervisionChangeHandler}
                    checked={isSupervision}
                  />
                }
                label="Supervision"
              />
              <FormControlLabel
                name="offering-safety-considerations"
                value="none"
                control={
                  <Checkbox
                    value="none"
                    onChange={noneChangeHandler}
                    checked={isNone}
                  />
                }
                label="None apply"
              />
            </FormGroup>

            <Box display={isKnownHazards ? 'block' : 'none'}>
              <TextField
                fullWidth
                multiline
                maxRows={4}
                id="offering-known-hazards-comments"
                name="offering-known-hazards-comments"
                label="Known Hazards comments"
                defaultValue={knownHazardsComments ?? undefined}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={formFieldStyles}
              />
            </Box>
            <Box display={isPopulationServed ? 'block' : 'none'}>
              <TextField
                fullWidth
                multiline
                maxRows={4}
                id="offering-population-served-comments"
                name="offering-population-served-comments"
                label="Population Served comments"
                defaultValue={populationServedComments ?? undefined}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={formFieldStyles}
              />
            </Box>
            <Box display={isSiteLocation ? 'block' : 'none'}>
              <TextField
                fullWidth
                multiline
                maxRows={4}
                id="offering-site-location-comments"
                name="offering-site-location-comments"
                label="Site Location comments"
                defaultValue={siteLocationComments ?? undefined}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={formFieldStyles}
              />
            </Box>
            <Box display={isSupervision ? 'block' : 'none'}>
              <TextField
                fullWidth
                multiline
                maxRows={4}
                id="offering-supervision-comments"
                name="offering-supervision-comments"
                label="Supervision comments"
                defaultValue={supervisionComments ?? undefined}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={formFieldStyles}
              />
            </Box>
            <Typography component="ul" sx={hlpText}>
              <li>
                <strong>KNOWN HAZARDS</strong>: This offering requires working
                with hazardous materials, heavy equipment, construction
                equipment, heights, or heavy machinery.
              </li>
              <li>
                <strong>POPULATION SERVED</strong>: Students may be working
                unsupervised with minors.
              </li>
              <li>
                <strong>POPULATION SERVED</strong>: Students may be working with
                behaviorally challenged populations.
              </li>
              <li>
                <strong>POPULATION SERVED</strong>: Students may be working with
                individuals who pose an elevated risk of harm or injury to them?
              </li>
              <li>
                <strong>SITE LOCATION</strong>: Parking and work areas may not
                be secure or adequately illuminated.
              </li>
              <li>
                <strong>SITE LOCATION</strong>: There have been incidents of
                criminal activity at the organization or site(s) within the last
                year. Or, the location would be described as a high-crime area.
              </li>
              <li>
                <strong>SUPERVISION</strong>: Students may be required to work
                at night (after 6pm). Or, students may be supervised less than
                50% of the time or the supervisor will be overseeing more than 8
                people.
              </li>
            </Typography>
          </Box>

          <Box component="fieldset" sx={fieldSetStyles}>
            <legend>Application Process</legend>
            <FormControlLabel
              control={
                <Switch
                  checked={requiresApproval}
                  onChange={onChangeRequiresApprovalHandler}
                  id="offering-requires-approval"
                  name="offering-requires-approval"
                />
              }
              label="Requires approval"
              sx={formFieldStyles}
            />

            {requiresApproval && (
              <>
                <Box component="fieldset" sx={fieldSetStyles} style={{display: 'flex', marginBottom: '1rem'}}>
                  <legend>Application Period</legend>
                  <TextField
                    type="date"
                    id="application-period-start-date"
                    name="application-period-start-date"
                    label="Start date"
                    onChange={handleApplicationStartDateOnChange}
                    defaultValue={defaultApplicationStartDate ?? undefined}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      pattern: 'd{4}-d{2}-d{2}',
                    }}
                    sx={[formFieldStyles, rightSpace]}
                  />

                  {applicationstartDate && (
                    <TextField
                      type="date"
                      id="application-period-end-date"
                      name="application-period-end-date"
                      label="End date"
                      defaultValue={defaultApplicationEndDate ?? undefined}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        min: applicationstartDate,
                        pattern: 'd{4}-d{2}-d{2}',
                      }}
                      sx={formFieldStyles}
                    />
                  )}
                </Box>
                <TextField
                  required
                  fullWidth
                  multiline
                  maxRows={4}
                  id="offering-application-instructions"
                  name="offering-application-instructions"
                  label="Application Instructions"
                  defaultValue={defaultApplicationInstructions ?? undefined}
                  sx={formFieldStyles}
                  error={errors.offeringApplicationInstructions}
                  helperText={errors.offeringApplicationInstructions ? "This field is required" : ""}
                  onChange={event => setErrors({...errors, offeringApplicationInstructions: event.target.value === ''})}
                />
              </>
            )}

            {departments && (
              <AutocompleteField
                id="offering-department"
                name="offering-department"
                label="Department"
                options={departments}
                selected={defaultDepartment}
                sx={formFieldStyles}
              />
            )}

            <FormControlLabel
              control={
                <Switch
                  id="offering-published"
                  name="offering-published"
                  defaultChecked={defaultPublished}
                />
              }
              label="Published"
              sx={formFieldStyles}
            />
          </Box>
        </div>
        <div aria-label="Time & Compensation">
          <Box component="fieldset" sx={fieldSetStyles}>
            <legend>Offering Availability</legend>
            <Box component="fieldset" sx={fieldSetStyles} style={{display: 'flex', marginBottom: '1rem'}}>
              <legend>Offering Dates</legend>
              <TextField
                required
                type="date"
                id="offering-start-date"
                name="offering-start-date"
                label="Start date"
                onChange={handleStartDateOnChange}
                defaultValue={defaultStartDate ?? undefined}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  pattern: 'd{4}-d{2}-d{2}',
                }}
                sx={[formFieldStyles, rightSpace]}
                error={errors.offeringStartDate}
                helperText={errors.offeringStartDate ? "This field is required" : ""}
              />

              {startDate && (
                <TextField
                  required
                  type="date"
                  id="offering-end-date"
                  name="offering-end-date"
                  label="End date"
                  defaultValue={defaultEndDate ?? undefined}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    min: startDate,
                    pattern: 'd{4}-d{2}-d{2}',
                  }}
                  sx={formFieldStyles}
                  error={errors.offeringEndDate}
                  helperText={errors.offeringEndDate ? "This field is required" : ""}
                />
              )}
            </Box>
            <div
              style={{
                display: 'flex',
                marginBottom: '1rem',
              }}
            >
              <TextField
                required
                type="number"
                id="offering-time-amount"
                name="offering-time-amount"
                label="Time Commitment"
                defaultValue={defaultTimeAmount ?? undefined}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 0.1,
                  min: 1,
                }}
                sx={[formFieldStyles, rightSpace]}
                error={errors.offeringTimeAmount}
                helperText={errors.offeringTimeAmount ? "This field is required" : ""}
                onChange={event => setErrors({...errors, offeringTimeAmount: event.target.value === ''})}
              />
              <TextField
                select
                required
                id="offering-time-unit"
                name="offering-time-unit"
                label="Unit of time"
                defaultValue={defaultTimeUnit ?? undefined}
                InputLabelProps={{
                  shrink: true,
                }}
                SelectProps={{
                  native: true,
                }}
                sx={[formFieldStyles, rightSpace]}
              >
                {OFFERING_TIME_UNITS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
              <TextField
                select
                required
                id="offering-time-frequency"
                name="offering-time-frequency"
                label="Hours Frequency"
                defaultValue={defaultTimeFrequency ?? undefined}
                InputLabelProps={{
                  shrink: true,
                }}
                SelectProps={{
                  native: true,
                }}
                sx={{ mb: theme.spacing(3), maxWidth: '13rem' }}
              >
                {OFFERING_TIME_FREQUENCY.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </div>
          </Box>
          <Box component="fieldset" sx={fieldSetStyles} style={{
            display: 'flex',
            marginBottom: '1rem',
          }}>
            <legend>Compensation</legend>
            <TextField
              select
              required
              id="offering-pay-type"
              name="offering-pay-type"
              label="Pay Type"
              defaultValue={defaultPayType ?? undefined}
              InputLabelProps={{
                shrink: true,
              }}
              SelectProps={{
                native: true,
              }}
              sx={[formFieldStyles, rightSpace]}
            >
              {PAY_TYPE.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField
              select
              required
              id="offering-pay-frequency"
              name="offering-pay-frequency"
              label="Pay Frequency"
              defaultValue={defaultPayFrequency ?? undefined}
              InputLabelProps={{
                shrink: true,
              }}
              SelectProps={{
                native: true,
              }}
              sx={[formFieldStyles, rightSpace]}
            >
              {PAY_FREQUENCY.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField
              required
              type="number"
              id="offering-pay-amount"
              name="offering-pay-amount"
              label="Pay Amount"
              defaultValue={defaultPayAmount ?? undefined}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 0.1,
                min: 0,
              }}
              sx={formFieldStyles}
              error={errors.offeringPayAmount}
              helperText={errors.offeringPayAmount ? "This field is required" : ""}
              onChange={event => setErrors({...errors, offeringPayAmount: event.target.value === ''})}
            />
          </Box>
        </div>
        <div aria-label="Additional Information">
          <FormControl fullWidth>
            <InputLabel
              id="org-form-addressptype"
              htmlFor="offering-form-locations-type"
            >
              Location type
            </InputLabel>
            <Select
              id="offering-form-locations-type"
              name="field_location_type"
              label="Location type"
              native={true}
              defaultValue={addressType}
              sx={formFieldStyles}
              onChange={remoteHandler}
            >
              <option value="business">Business</option>
              <option value="residence">Residence</option>
              <option value="public_space">Public Space</option>
              <option value="remote_online">Remote/Online</option>
            </Select>
          </FormControl>
          <AddressField
            display={isRemote ? 'none' : 'block'}
            id="offering"
            address={address}
            onAddressChange={handleAddressChange}
            errors={{
              streetAddress: errors.offeringStreetAddress,
              city: errors.offeringCity,
              zip: errors.offeringZipcode,
              state: errors.offeringState
            }}
            mb={3}
          />
          <input type="hidden" id="offering-latitude" name="offering-latitude" value={geoLocation.latitude ?? ''} />
          <input type="hidden" id="offering-longitude" name="offering-longitude" value={geoLocation.longitude ?? ''} />
          <Box component="fieldset" sx={fieldSetStyles}>
            <legend>Focus Population and Areas</legend>
            {focusPopulations && (
              <AutocompleteField
                multiple
                required
                id="offering-focus-populations"
                name="offering-focus-populations"
                label="Focus Population(s)"
                options={focusPopulations}
                selected={defaultFocusPopulations}
                sx={formFieldStyles}
                helptext="Please indicate primary population/clientele your organization will serve either directly or indirectly as part of this offering. If you're unsure, select 'Non-specific/any population' (select all that apply)."
                error={errors.offeringFocusPopulations}
                onChange={event => setErrors({...errors, offeringFocusPopulations: (event.target as HTMLInputElement).value.length === 0 })}
              />
            )}

            {focusAreas && (
              <AutocompleteField
                multiple
                required
                id="offering-focus-areas"
                name="offering-focus-areas"
                label="Focus Area(s)"
                options={focusAreas}
                selected={defaultFocusAreas}
                sx={formFieldStyles}
                helptext="Please identify the general focus area(s) pertaining to this offering (select all that apply)."
                error={errors.offeringFocusAreas}
                onChange={event => setErrors({...errors, offeringFocusAreas: (event.target as HTMLInputElement).value.length === 0 })}
              />
            )}

            {subFocusAreas && (
              <AutocompleteField
                multiple
                id="offering-sub-focus-areas"
                name="offering-sub-focus-areas"
                label="Sub focus Area(s)"
                options={subFocusAreas}
                selected={defaultSubFocusAreas}
                sx={formFieldStyles}
                helptext="For the focus area(s) identified above, please select any subcategories that apply. (Note: not all areas have subcategories)."
              />
            )}
          </Box>
        </div>
      </Tabs>

      <Box sx={actionButtonsContainerStyles}>
        <Button
          variant="contained"
          type="submit"
          sx={{ flexShrink: 0 }}
          onClick={(event) => {
            handleSubmit(event);
            onClickHandler(event, 'offering-form-panel', tabRef);
          }}
        >
          {isEdit ? 'Update' : 'Create'} offering
        </Button>

        {isEdit && cancelUrl && duplidateUr && (
          <>
            <Button
              variant="contained"
              component={Link}
              href={duplidateUr}
              sx={{ flexShrink: 0 }}
            >
              Duplicate offering
            </Button>
            <Button
              variant="outlined"
              component={Link}
              href={cancelUrl}
              sx={{ flexShrink: 0 }}
            >
              Cancel
            </Button>
          </>
        )}
      </Box>
    </>
  );

  const form = FormElement ? (
    <FormElement method="post">{formInner}</FormElement>
  ) : (
    <form>{formInner}</form>
  );

  return (
    <article>
      <Breadcrumbs items={breadcrumb} />
      <Typography variant="h1" sx={titleStyles}>
        {isEdit ? 'Edit' : 'Add an'} offering
      </Typography>
      <Paper sx={paperStyles}>{form}</Paper>
    </article>
  );
}
