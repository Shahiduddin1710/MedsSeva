import { PrismaClient } from '@prisma/client';

export async function seedPackages(prisma: PrismaClient) {
  console.log('Seeding packages...');

  await prisma.packageFAQ.deleteMany();
  await prisma.packagePreparation.deleteMany();
  await prisma.bookingPackage.deleteMany();
  await prisma.packageTest.deleteMany();
  await prisma.healthPackage.deleteMany();

  const allTests = await prisma.test.findMany();
  const findTest = (name: string) => allTests.find((t) => t.name === name);

  const packages = [
    {
      name: 'SevaCheck Basic', subtitle: 'First-timers · Young Adults',
      category: 'Basic', categoryId: 'basic',
      price: 449, oldPrice: 1000, discount: '55% OFF', parametersCount: 46,
      reportTime: '24 Hours', fastingRequired: true, homeCollection: true,
      description: 'Ideal for young adults tracking basic health benchmarks.',
      preparation: 'Fasting of 8-10 hours is mandatory. Drinking water is permitted.',
      displayOrder: 1,
      testNames: ['Complete Blood Count (CBC)', 'Blood Sugar Fasting', 'Urine Routine & Microscopy', 'Lipid Profile (7 param)', 'Liver Function Test (LFT)'],
      preparationGuidelines: [
        { title: 'Fasting Required', description: 'Do not eat or drink anything except water for 8–10 hours before your sample collection.', displayOrder: 1 },
        { title: 'Stay Hydrated', description: 'Drink 2–3 glasses of plain water before the test. This makes vein access easier.', displayOrder: 2 },
        { title: 'Avoid Strenuous Exercise', description: 'Skip intense workouts for at least 12 hours prior to the test to prevent elevated enzyme levels.', displayOrder: 3 },
        { title: 'Morning Collection Preferred', description: 'Schedule your sample collection between 7 AM and 10 AM for most accurate fasting values.', displayOrder: 4 },
      ],
      faqs: [
        { question: 'Why is fasting required for this test?', answer: 'Blood sugar and lipid levels fluctuate after eating. Fasting ensures baseline values for accurate diagnosis.', displayOrder: 1 },
        { question: 'Can I take my regular medications before the test?', answer: 'Yes, you may take essential medications with a small sip of water unless your doctor has advised otherwise.', displayOrder: 2 },
        { question: 'When will I receive my reports?', answer: 'Reports are delivered digitally within 24 hours of sample collection.', displayOrder: 3 },
        { question: 'Is home sample collection available?', answer: 'Yes, our trained phlebotomist will visit your home at your scheduled time slot.', displayOrder: 4 },
      ],
    },
    {
      name: 'SevaCheck Plus', subtitle: 'Adults 25–45 · Annual Screen',
      category: 'Plus', categoryId: 'plus',
      price: 749, oldPrice: 1800, discount: '58% OFF', parametersCount: 54,
      reportTime: '24 Hours', fastingRequired: true, homeCollection: true,
      description: 'Comprehensive basic checkup including blood sugar and thyroid status.',
      preparation: '8-12 hours overnight fasting required.',
      displayOrder: 2,
      testNames: ['Complete Blood Count (CBC)', 'Blood Sugar Fasting', 'HbA1c – 3-Month Average', 'Thyroid Profile T3/T4/TSH', 'Lipid Profile (7 param)', 'Liver Function Test (LFT)', 'Urine Routine & Microscopy'],
      preparationGuidelines: [
        { title: 'Overnight Fasting', description: 'Fast for 8–12 hours. Water intake is allowed and encouraged.', displayOrder: 1 },
        { title: 'Thyroid Medication Timing', description: 'If you are on thyroid medication (Eltroxin/Thyroxine), do not take it before the blood draw. Take it immediately after.', displayOrder: 2 },
        { title: 'Avoid Heavy Meals the Night Before', description: 'Eat a light, low-fat dinner the night before to prevent lipemia (fatty blood) which can affect results.', displayOrder: 3 },
        { title: 'No Alcohol for 24 Hours', description: 'Alcohol consumption in the 24 hours prior can falsely elevate liver enzyme and triglyceride readings.', displayOrder: 4 },
      ],
      faqs: [
        { question: 'What does HbA1c measure?', answer: 'HbA1c reflects your average blood sugar levels over the past 2–3 months. It is the gold standard for diabetes monitoring and does not require fasting.', displayOrder: 1 },
        { question: 'Do I need to stop thyroid medication before the test?', answer: 'Yes, for the most accurate TSH reading, take your thyroid medication only after the blood sample has been collected.', displayOrder: 2 },
        { question: 'How is this different from the Basic package?', answer: 'SevaCheck Plus adds HbA1c and Thyroid Profile (T3/T4/TSH) to give you a more complete annual health picture.', displayOrder: 3 },
        { question: 'Can pregnant women take this test?', answer: 'Yes, but inform our phlebotomist and your doctor about your pregnancy so results can be interpreted with appropriate reference ranges.', displayOrder: 4 },
      ],
    },
    {
      name: 'SevaCheck Complete', subtitle: 'Adults 30–55 · Most Popular',
      category: 'Complete', categoryId: 'complete',
      price: 1149, oldPrice: 2800, discount: '59% OFF', parametersCount: 73,
      badge: 'BEST SELLER',
      reportTime: '24 Hours', fastingRequired: true, homeCollection: true,
      isFeatured: true, isPopular: true,
      description: 'Our most comprehensive screening covering key organs and metrics.',
      preparation: 'Strict overnight fasting of minimum 10 hours is mandatory.',
      displayOrder: 3,
      testNames: ['Complete Blood Count (CBC)', 'ESR (Westergren Method)', 'Urine Routine & Microscopy', 'Blood Sugar Fasting', 'HbA1c – 3-Month Average', 'Thyroid Profile T3/T4/TSH', 'Lipid Profile (7 param)', 'Liver Function Test (LFT)', 'Vitamin D Total (25-OH)', 'Vitamin B12 (Cobalamin)', 'Calcium Test'],
      preparationGuidelines: [
        { title: 'Minimum 10-Hour Fast', description: 'Do not consume food, beverages, or juices for at least 10 hours before the test. Plain water is permitted.', displayOrder: 1 },
        { title: 'Suspend Vitamin Supplements', description: 'Stop taking Vitamin D, Vitamin B12, or multivitamin supplements at least 24 hours before the test to avoid falsely elevated readings.', displayOrder: 2 },
        { title: 'Thyroid Medication After Collection', description: 'If on levothyroxine or any thyroid hormone replacement, take it only after your blood sample is collected.', displayOrder: 3 },
        { title: 'Avoid Strenuous Activity', description: 'No high-intensity workouts 12 hours before. Exercise elevates muscle enzymes (AST, ALT, CK) and CBC values.', displayOrder: 4 },
        { title: 'Schedule for Early Morning', description: 'Best collected between 7 AM and 10 AM for clinically validated reference values.', displayOrder: 5 },
      ],
      faqs: [
        { question: 'Why are Vitamin D and B12 included?', answer: 'Deficiencies in Vitamin D and B12 are extremely common in India and are linked to fatigue, bone loss, neurological issues, and low immunity. Early detection enables supplementation.', displayOrder: 1 },
        { question: 'What is ESR and why is it tested?', answer: 'ESR (Erythrocyte Sedimentation Rate) is an inflammation marker. Elevated ESR can indicate infection, autoimmune conditions, or chronic inflammation.', displayOrder: 2 },
        { question: 'How often should I take this test?', answer: 'Once a year is recommended for healthy adults. People with known conditions like diabetes or hypertension should test every 6 months.', displayOrder: 3 },
        { question: 'Will I get a doctor consultation with the report?', answer: 'The report includes reference ranges and clinical flags. For interpretation, we recommend consulting your physician or our in-app support team.', displayOrder: 4 },
      ],
    },
    {
      name: 'SevaCheck Advanced', subtitle: 'Adults 40+ · Chronic Monitoring',
      category: 'Advanced', categoryId: 'advanced',
      price: 1649, oldPrice: 3800, discount: '57% OFF', parametersCount: 81,
      reportTime: '24 Hours', fastingRequired: true, homeCollection: true,
      description: 'Advanced overview including crucial vitamin counts and electrolyte levels.',
      preparation: 'Do not take vitamin supplements 24 hours prior. 10-12 hrs fast.',
      displayOrder: 4,
      testNames: ['Complete Blood Count (CBC)', 'Blood Sugar Fasting', 'HbA1c – 3-Month Average', 'Thyroid Profile T3/T4/TSH', 'Anti TPO Antibody', 'Lipid Profile (7 param)', 'CRP (Cardiac Risk)', 'Liver Function Test (LFT)', 'Vitamin D Total (25-OH)', 'Vitamin B12 (Cobalamin)', 'Iron Profile', 'Insulin Fasting', 'Peripheral Smear Examination', 'Blood Group & Rh Typing'],
      preparationGuidelines: [
        { title: '10–12 Hour Fasting Mandatory', description: 'Insulin Fasting and Blood Sugar Fasting both require a strict 10–12 hour fast. No food, tea, coffee, or juice allowed.', displayOrder: 1 },
        { title: 'Hold All Supplements', description: 'Avoid Vitamin D, B12, Iron, and multivitamin supplements for at least 24 hours prior to testing.', displayOrder: 2 },
        { title: 'Continue Critical Medications', description: 'Do not skip antihypertensives, diabetes medications, or cardiac drugs. These are essential for your safety. Only thyroid hormone should be taken after collection.', displayOrder: 3 },
        { title: 'Stay Well Rested', description: 'Poor sleep and stress can temporarily elevate CRP and blood sugar. Try to get at least 7 hours of sleep the night before.', displayOrder: 4 },
        { title: 'Inform About Biotin Supplements', description: 'High-dose biotin (Vitamin B7) can interfere with Anti-TPO Antibody and Thyroid tests. Stop biotin supplementation 48 hours before the test.', displayOrder: 5 },
      ],
      faqs: [
        { question: 'What is Anti TPO Antibody and why is it important?', answer: 'Anti-TPO (Anti-Thyroid Peroxidase) antibodies indicate autoimmune thyroid disease such as Hashimoto\'s thyroiditis. Elevated levels explain unexplained weight gain, fatigue, and hair loss even when TSH is normal.', displayOrder: 1 },
        { question: 'What does Insulin Fasting test tell me?', answer: 'Fasting insulin measures how much insulin your pancreas produces at rest. High fasting insulin with normal sugar indicates insulin resistance — an early pre-diabetic state.', displayOrder: 2 },
        { question: 'What is CRP and what does a high value mean?', answer: 'C-Reactive Protein is a marker of systemic inflammation. Elevated CRP is associated with heart disease risk, active infections, and autoimmune flares.', displayOrder: 3 },
        { question: 'Is blood group testing useful at this age?', answer: 'Yes. Blood group and Rh type are critical for emergency transfusions and surgical planning. Having this on record is always valuable.', displayOrder: 4 },
      ],
    },
    {
      name: 'SevaCheck Elite', subtitle: 'Most Comprehensive · 95+ Param',
      category: 'Elite', categoryId: 'elite',
      price: 2449, oldPrice: 5500, discount: '55% OFF', parametersCount: 95,
      badge: 'PREMIUM',
      reportTime: '24 Hours', fastingRequired: true, homeCollection: true,
      isFeatured: true,
      description: 'Elite executive evaluation. Perfect for ultimate body analytics.',
      preparation: '12 Hours strict fasting. Avoid heavy exercise or high-fat meal the day before.',
      displayOrder: 5,
      testNames: ['Complete Blood Count (CBC)', 'ESR (Westergren Method)', 'Urine Routine & Microscopy', 'Peripheral Smear Examination', 'Blood Group & Rh Typing', 'Blood Sugar Fasting', 'HbA1c – 3-Month Average', 'Blood Sugar PP', 'Insulin Fasting', 'Thyroid Free FT3/FT4/TSH', 'Anti TPO Antibody', 'Lipid Profile (7 param)', 'Troponin I', 'CRP (Cardiac Risk)', 'Liver Function Test (LFT)', 'Bilirubin Total/Direct', 'SGPT (ALT)', 'Hepatitis B Surface Antigen', 'Vitamin D Total (25-OH)', 'Vitamin B12 (Cobalamin)', 'Iron Profile', 'Calcium Test'],
      preparationGuidelines: [
        { title: 'Strict 12-Hour Fast', description: 'No food, beverages, or supplements for 12 hours. This is non-negotiable for accurate glucose, insulin, and lipid panels.', displayOrder: 1 },
        { title: 'Avoid High-Fat Meals 48 Hours Prior', description: 'A fatty meal 48 hours before can cause lipemia (milky blood) affecting triglycerides, LDL, and liver enzymes. Eat clean and light.', displayOrder: 2 },
        { title: 'No Strenuous Exercise for 24 Hours', description: 'Intense exercise elevates Troponin I, CK, AST, and CRP artificially. Rest the day before for accurate cardiac and inflammation markers.', displayOrder: 3 },
        { title: 'Stop Biotin and All Supplements', description: 'Biotin, Vitamin D, B12, Iron, and fish oil supplements must be stopped 48 hours before. They interfere with multiple immunoassay tests.', displayOrder: 4 },
        { title: 'Hepatitis B — No Special Prep', description: 'HBsAg (Hepatitis B Surface Antigen) does not require fasting but is included in this panel for your convenience.', displayOrder: 5 },
        { title: 'Post-Prandial Sample — Bring Breakfast', description: 'For Blood Sugar PP, you will eat a standard meal after the fasting sample is collected. Our phlebotomist will guide you on the timing.', displayOrder: 6 },
      ],
      faqs: [
        { question: 'What is Troponin I and should I worry if it is elevated?', answer: 'Troponin I is a highly sensitive cardiac marker. Elevations indicate cardiac muscle stress. However, in a screening context, mild elevations need clinical correlation — do not panic; consult your cardiologist.', displayOrder: 1 },
        { question: 'What is the difference between Thyroid Profile and Free FT3/FT4/TSH?', answer: 'Standard T3/T4/TSH measures total thyroid hormone (bound + free). Free FT3/FT4 measures only the biologically active unbound fraction — more sensitive for diagnosing subclinical thyroid dysfunction.', displayOrder: 2 },
        { question: 'What does Hepatitis B Surface Antigen detect?', answer: 'HBsAg detects active Hepatitis B virus infection. A positive result requires further confirmatory testing and physician consultation.', displayOrder: 3 },
        { question: 'Is this package suitable for pre-surgery screening?', answer: 'Yes. SevaCheck Elite covers most parameters required in standard pre-operative evaluation including CBC, LFT, blood group, HBsAg, and coagulation-adjacent markers.', displayOrder: 4 },
        { question: 'How long does the complete sample collection take?', answer: 'The entire home collection process including fasting blood, post-meal blood, and urine takes approximately 2.5–3 hours total at your home.', displayOrder: 5 },
      ],
    },
    {
      name: 'SevaWoman', subtitle: 'Women 20–55 · Hormones & Thyroid',
      category: 'Women', categoryId: 'women',
      price: 1449, oldPrice: 3200, discount: '55% OFF', parametersCount: 88,
      badge: 'FOR HER',
      reportTime: '24 Hours', fastingRequired: true, homeCollection: true,
      isFeatured: true,
      description: 'Custom formulated for female hormonal profiling and vital tracking.',
      preparation: 'Preferably tested on Day 2 or Day 3 of Menstrual Cycle. 10 hours fast.',
      displayOrder: 6,
      testNames: ['Complete Blood Count (CBC)', 'Thyroid Profile T3/T4/TSH', 'Vitamin D Total (25-OH)', 'Vitamin B12 (Cobalamin)', 'Iron Profile', 'Calcium Test', 'Lipid Profile (7 param)'],
      preparationGuidelines: [
        { title: 'Cycle Day Timing is Critical', description: 'For accurate hormone readings (FSH, LH, Estradiol), this test must be done on Day 2, 3, or 4 of your menstrual cycle. Day 1 is the first day of full flow.', displayOrder: 1 },
        { title: '10-Hour Fasting Required', description: 'Fast for a minimum of 10 hours. Water is permitted and encouraged.', displayOrder: 2 },
        { title: 'Do Not Take Oral Contraceptive Pills Before Test', description: 'OCP usage suppresses FSH and LH artificially. Inform the lab if you are currently on contraceptive pills as results may need to be interpreted differently.', displayOrder: 3 },
        { title: 'Avoid Iron Supplements 24 Hours Before', description: 'Iron supplementation can falsely elevate serum iron and ferritin levels. Stop iron tablets 24 hours before the test.', displayOrder: 4 },
        { title: 'Thyroid Medication Timing', description: 'Take thyroid medication only after sample collection for accurate TSH measurement.', displayOrder: 5 },
      ],
      faqs: [
        { question: 'Why should this test be done on Day 2 or Day 3 of the cycle?', answer: 'Reproductive hormones like FSH and LH are at their baseline levels in the early follicular phase (Day 2–4). Testing at any other time gives misleading results.', displayOrder: 1 },
        { question: 'Can I take this test if I have irregular periods?', answer: 'Yes. If your cycles are irregular, test on any day but note the cycle day on your form. This is relevant for hormonal interpretation.', displayOrder: 2 },
        { question: 'Will iron deficiency affect multiple test results?', answer: 'Yes. Iron deficiency (low ferritin) can cause low hemoglobin (anemia), fatigue, hair loss, and abnormal thyroid function. This panel is designed to detect all these simultaneously.', displayOrder: 3 },
        { question: 'Is this test suitable for women going through menopause?', answer: 'Yes. Post-menopausal women will typically show elevated FSH and LH with low estradiol. This panel helps monitor menopausal transition and bone risk.', displayOrder: 4 },
      ],
    },
    {
      name: 'SevaMan', subtitle: 'Men 25–55 · Testosterone & Heart',
      category: 'Men', categoryId: 'men',
      price: 1449, oldPrice: 3200, discount: '55% OFF', parametersCount: 82,
      badge: 'FOR HIM',
      reportTime: '24 Hours', fastingRequired: true, homeCollection: true,
      description: 'Engineered for men to track hormonal health, vitality, and organ efficiency.',
      preparation: 'Best done via early morning fasting blood collection (8 AM to 10 AM).',
      displayOrder: 7,
      testNames: ['Complete Blood Count (CBC)', 'Lipid Profile (7 param)', 'Liver Function Test (LFT)', 'Blood Sugar Fasting', 'Thyroid Profile T3/T4/TSH', 'CRP (Cardiac Risk)'],
      preparationGuidelines: [
        { title: 'Early Morning Collection is Essential', description: 'Testosterone peaks between 7 AM and 10 AM. For accurate testosterone levels, schedule your collection in this window.', displayOrder: 1 },
        { title: '10-Hour Overnight Fast', description: 'Fast from the previous night. This is required for lipid profile, blood sugar, and insulin readings.', displayOrder: 2 },
        { title: 'Avoid Alcohol for 48 Hours', description: 'Alcohol significantly suppresses testosterone and elevates liver enzymes. Abstain for at least 48 hours before the test.', displayOrder: 3 },
        { title: 'No Gym Before Sample Collection', description: 'Intense training acutely elevates testosterone, CRP, and liver enzymes. Skip the morning workout on test day.', displayOrder: 4 },
        { title: 'Avoid Anabolic Steroids or Testosterone Supplements', description: 'External testosterone or performance-enhancing supplements render testosterone testing meaningless. Inform your doctor if you are currently using these.', displayOrder: 5 },
      ],
      faqs: [
        { question: 'What is considered a low testosterone level?', answer: 'Normal serum testosterone for adult males is 300–1000 ng/dL. Values below 300 ng/dL suggest hypogonadism and require clinical evaluation.', displayOrder: 1 },
        { question: 'Why is cardiac screening included in a men\'s panel?', answer: 'Cardiovascular disease risk rises sharply in men after age 35. Lipid profile and CRP together provide an early cardiac risk assessment.', displayOrder: 2 },
        { question: 'Can I take this test if I am on TRT (Testosterone Replacement Therapy)?', answer: 'Yes, but inform your doctor. TRT will elevate testosterone levels above normal ranges. Your doctor will interpret results in context of your therapy.', displayOrder: 3 },
        { question: 'Does low testosterone affect thyroid function?', answer: 'Low testosterone and hypothyroidism often co-exist and share symptoms like fatigue, weight gain, and low libido. This panel screens both simultaneously.', displayOrder: 4 },
      ],
    },
    {
      name: 'SevaSenior 60+', subtitle: 'Senior Citizens · 60 Years & Above',
      category: 'Senior Citizen', categoryId: 'senior_citizen',
      price: 1749, oldPrice: 4000, discount: '56% OFF', parametersCount: 91,
      reportTime: '24 Hours', fastingRequired: true, homeCollection: true,
      description: 'Senior protective screening ensuring bone stability, cardiac health, and immunity metrics.',
      preparation: 'Rest properly prior to sample collection. Inform your regular medications.',
      displayOrder: 8,
      testNames: ['Complete Blood Count (CBC)', 'ESR (Westergren Method)', 'Lipid Profile (7 param)', 'Liver Function Test (LFT)', 'HbA1c – 3-Month Average', 'Thyroid Profile T3/T4/TSH', 'Vitamin D Total (25-OH)', 'Vitamin B12 (Cobalamin)', 'Calcium Test', 'CRP (Cardiac Risk)'],
      preparationGuidelines: [
        { title: 'Do Not Skip Your Regular Medications', description: 'Seniors should take all routine medications — antihypertensives, cardiac drugs, diabetes medications — as prescribed. Only thyroid hormone should be taken after blood collection.', displayOrder: 1 },
        { title: 'Light Fast of 8–10 Hours', description: 'An 8–10 hour fast is sufficient for this panel. Do not fast longer than 12 hours as prolonged fasting can cause hypoglycemia in elderly patients.', displayOrder: 2 },
        { title: 'Stay Seated or Lie Down After Collection', description: 'Elderly patients may feel lightheaded post-collection. Rest for 5–10 minutes before getting up. Our phlebotomist is trained to assist.', displayOrder: 3 },
        { title: 'Provide Complete Medication List', description: 'Share the full list of current medications with the phlebotomist. Certain drugs (steroids, diuretics) can affect calcium, potassium, and blood sugar readings.', displayOrder: 4 },
        { title: 'No Calcium Supplements 24 Hours Before', description: 'Stop calcium tablets and antacids (which contain calcium) for 24 hours before the test to ensure accurate serum calcium measurement.', displayOrder: 5 },
      ],
      faqs: [
        { question: 'Is it safe for seniors to give blood samples at home?', answer: 'Absolutely. Home collection is actually preferred for senior citizens as it eliminates the stress and physical risk of travelling to a lab. Our phlebotomists are trained in geriatric care.', displayOrder: 1 },
        { question: 'Why is Vitamin D critically important for seniors?', answer: 'Vitamin D deficiency in seniors leads to osteoporosis, increased fracture risk, muscle weakness, and depression. Levels below 20 ng/mL require immediate supplementation under medical guidance.', displayOrder: 2 },
        { question: 'What does elevated CRP mean in senior citizens?', answer: 'Chronically elevated CRP in older adults is associated with cardiovascular disease, arthritis flares, and frailty syndrome. It is an important marker for long-term health monitoring.', displayOrder: 3 },
        { question: 'How often should senior citizens get this panel done?', answer: 'Every 6 months is recommended for individuals above 60, especially if managing diabetes, hypertension, or thyroid conditions.', displayOrder: 4 },
      ],
    },
    {
      name: 'SevaCouple', subtitle: 'Couples · Annual Screening × 2',
      category: 'Couple', categoryId: 'couple',
      price: 1949, oldPrice: 5600, discount: '65% OFF', parametersCount: 73,
      reportTime: '24 Hours', fastingRequired: true, homeCollection: true,
      description: 'Ultimate preventative screening discounted for couples sharing home visits.',
      preparation: 'Requires fasting for both individuals.',
      displayOrder: 9,
      testNames: ['Complete Blood Count (CBC)', 'Blood Sugar Fasting', 'Lipid Profile (7 param)', 'Thyroid Profile T3/T4/TSH', 'Liver Function Test (LFT)'],
      preparationGuidelines: [
        { title: 'Both Partners Must Fast', description: 'Both individuals must observe a 10-hour fast before sample collection. Schedule at the same appointment window.', displayOrder: 1 },
        { title: 'Synchronize Appointment Time', description: 'Both samples will be collected in a single visit by our phlebotomist. Ensure both partners are available at the scheduled time.', displayOrder: 2 },
        { title: 'Separate Sample Labelling', description: 'Each person\'s sample is independently labelled, processed, and reported. You will receive two separate individual reports.', displayOrder: 3 },
        { title: 'Thyroid Medication After Collection', description: 'If either partner is on thyroid medication, take it after the blood sample is collected for accurate TSH reading.', displayOrder: 4 },
      ],
      faqs: [
        { question: 'Do both partners get individual reports?', answer: 'Yes. Each partner receives a completely separate digital report with their own results, flags, and reference ranges.', displayOrder: 1 },
        { question: 'Can we book at different times?', answer: 'The couple package is optimized for a single home visit for both individuals. Separate bookings will not qualify for the couple discount.', displayOrder: 2 },
        { question: 'What if one partner has different requirements?', answer: 'Our phlebotomist will accommodate different needs. Please mention any specific requirements during booking.', displayOrder: 3 },
        { question: 'Is this package available for same-sex couples?', answer: 'Yes, the SevaCouple package is available for any two individuals sharing the same appointment and address.', displayOrder: 4 },
      ],
    },
    {
      name: 'SevaYouth Under 30', subtitle: 'Young Adults 18–30 · First Screen',
      category: 'Youth', categoryId: 'youth',
      price: 549, oldPrice: 1200, discount: '54% OFF', parametersCount: 48,
      badge: 'NEW',
      reportTime: '24 Hours', fastingRequired: true, homeCollection: true,
      description: 'Affordable, entry-level wellness dashboard covering lifestyle stress markers.',
      preparation: '10 hours fasting. Drink plenty of water.',
      displayOrder: 10,
      testNames: ['Complete Blood Count (CBC)', 'Blood Sugar Fasting', 'Lipid Profile (7 param)', 'Vitamin D Total (25-OH)', 'Vitamin B12 (Cobalamin)'],
      preparationGuidelines: [
        { title: '10-Hour Fast', description: 'Do not eat or drink anything except water for 10 hours. This is essential for accurate blood sugar and lipid levels.', displayOrder: 1 },
        { title: 'Hydrate Well', description: 'Drink 2–3 glasses of water before the appointment. Dehydration in young adults frequently causes difficult venipuncture.', displayOrder: 2 },
        { title: 'Skip Morning Coffee or Protein Shakes', description: 'Coffee, energy drinks, and protein shakes before the test affect blood glucose and lipid readings. Avoid all of these on test day.', displayOrder: 3 },
        { title: 'No Gym or Sports Activity on Test Morning', description: 'Physical activity before testing artificially elevates blood glucose, CK, and lipids. Exercise after sample collection instead.', displayOrder: 4 },
      ],
      faqs: [
        { question: 'Why should young adults test Vitamin D and B12?', answer: 'Indoor lifestyle, limited sunlight, and vegetarian diets are making Vitamin D and B12 deficiency extremely common in young Indian adults — causing fatigue, brain fog, and bone weakness.', displayOrder: 1 },
        { question: 'I am healthy and have no symptoms. Do I need this?', answer: 'Yes. Many conditions including prediabetes, Vitamin D deficiency, and early dyslipidemia have no symptoms until they progress. Early detection gives you the advantage to reverse them.', displayOrder: 2 },
        { question: 'At what age should I start annual health checkups?', answer: 'From age 18 onwards, a basic annual health screen is recommended by most clinical guidelines, especially given modern sedentary and high-stress lifestyles.', displayOrder: 3 },
        { question: 'How long does home sample collection take?', answer: 'The entire process from arrival to completion takes approximately 10–15 minutes for a standard blood and urine collection.', displayOrder: 4 },
      ],
    },
    {
      name: 'SevaAdult 30–45', subtitle: 'Mid-Adults · Most At Risk Age',
      category: 'Adult', categoryId: 'adult',
      price: 849, oldPrice: 1900, discount: '55% OFF', parametersCount: 62,
      reportTime: '24 Hours', fastingRequired: true, homeCollection: true,
      description: 'Proactive check tailored for busy mid-career professionals.',
      preparation: '8-12 hours fasting required. No heavy alcohol 24h prior.',
      displayOrder: 11,
      testNames: ['Complete Blood Count (CBC)', 'Lipid Profile (7 param)', 'Liver Function Test (LFT)', 'Blood Sugar Fasting', 'Thyroid Profile T3/T4/TSH', 'Vitamin D Total (25-OH)', 'CRP (Cardiac Risk)'],
      preparationGuidelines: [
        { title: '8–12 Hour Fast', description: 'Fast for at least 8 hours. Water is permitted. Do not skip fasting as it directly affects blood glucose and cholesterol accuracy.', displayOrder: 1 },
        { title: 'No Alcohol for 24 Hours', description: 'Alcohol affects liver enzymes (SGPT, SGOT) and triglycerides significantly. Abstain completely for 24 hours before your test.', displayOrder: 2 },
        { title: 'Manage Stress Before the Test', description: 'High stress (work deadlines, conflict) acutely raises blood glucose and CRP. Try to schedule your test on a relatively calm morning.', displayOrder: 3 },
        { title: 'Take Thyroid Medication After Blood Draw', description: 'For thyroid medication users, have the blood drawn first, then take your medication to ensure accurate TSH results.', displayOrder: 4 },
      ],
      faqs: [
        { question: 'Why is CRP included in this panel?', answer: 'People aged 30–45 in high-stress professions have significant risk of silent inflammation. CRP detects this before it manifests as heart disease or metabolic syndrome.', displayOrder: 1 },
        { question: 'I work night shifts. How should I plan my fasting?', answer: 'If you work nights, fast for 8–10 hours from your last meal regardless of time of day. Schedule the test at a convenient time and inform the phlebotomist about your shift pattern.', displayOrder: 2 },
        { question: 'Is this package good for someone who recently started a diet or fitness program?', answer: 'Yes. This is an excellent baseline panel before or after starting a health program. It helps you track the metabolic impact of lifestyle changes.', displayOrder: 3 },
        { question: 'What does an abnormal LFT indicate?', answer: 'Abnormal Liver Function Tests can indicate fatty liver (common in adults with high carb diets), alcohol use, medication side effects, or viral hepatitis. Follow up with your doctor for interpretation.', displayOrder: 4 },
      ],
    },
    {
      name: 'SevaMidlife 45–60', subtitle: 'Pre-Senior Preventive Care',
      category: 'Midlife', categoryId: 'midlife',
      price: 1349, oldPrice: 3000, discount: '55% OFF', parametersCount: 76,
      reportTime: '24 Hours', fastingRequired: true, homeCollection: true,
      description: 'Specialized transition healthcare identifying hormonal shifts and deficiencies.',
      preparation: '12 hours fasting is mandatory. Continue scheduled critical medicines.',
      displayOrder: 12,
      testNames: ['Complete Blood Count (CBC)', 'Lipid Profile (7 param)', 'Liver Function Test (LFT)', 'HbA1c – 3-Month Average', 'Thyroid Profile T3/T4/TSH', 'Vitamin D Total (25-OH)', 'Vitamin B12 (Cobalamin)', 'Calcium Test', 'CRP (Cardiac Risk)'],
      preparationGuidelines: [
        { title: 'Strict 12-Hour Fast', description: 'At this age, metabolic conditions like pre-diabetes and dyslipidemia are common. A strict 12-hour fast is essential for reliable glucose and lipid readings.', displayOrder: 1 },
        { title: 'Do Not Discontinue Critical Medications', description: 'Continue blood pressure medications, diabetes drugs, statins, and cardiac medications as prescribed. Never stop these for a blood test.', displayOrder: 2 },
        { title: 'Calcium Supplements — Hold for 24 Hours', description: 'Calcium tablets and antacids containing calcium can falsely elevate serum calcium. Hold them for 24 hours before the test.', displayOrder: 3 },
        { title: 'Thyroid Medication — Take After Blood Draw', description: 'Take levothyroxine or thyroid hormone replacement only after your blood sample has been collected.', displayOrder: 4 },
        { title: 'Avoid Cholesterol-Lowering Supplements', description: 'Red yeast rice, omega-3, and cholesterol supplements can affect lipid panel readings. Inform the lab if you are taking them regularly.', displayOrder: 5 },
      ],
      faqs: [
        { question: 'What hormonal changes should I expect between 45 and 60?', answer: 'This decade sees declining testosterone in men, perimenopause in women, rising insulin resistance, and thyroid dysfunction. This panel is designed to detect all of these early.', displayOrder: 1 },
        { question: 'Why is calcium tested in this age group?', answer: 'Calcium deficiency and vitamin D deficiency together accelerate bone density loss (osteopenia/osteoporosis). Detection at this stage allows preventive intervention.', displayOrder: 2 },
        { question: 'I am already on statins. Will this panel still be useful?', answer: 'Yes. This panel monitors the effectiveness of your statin therapy by tracking LDL, HDL, and triglyceride changes over time. It also checks for liver enzyme elevation — a known statin side effect.', displayOrder: 3 },
        { question: 'How is this different from the Senior 60+ package?', answer: 'SevaMidlife is calibrated for the 45–60 age group where conditions are emerging. SevaSenior 60+ adds additional markers relevant to established chronic conditions and geriatric frailty.', displayOrder: 4 },
      ],
    },
    {
      name: 'SevaDiabetes Care', subtitle: 'Diabetes · 3-Month Monitoring',
      category: 'Diabetes Care', categoryId: 'diabetes_care',
      price: 849, oldPrice: 1900, discount: '55% OFF', parametersCount: 38,
      reportTime: '24 Hours', fastingRequired: true, homeCollection: true,
      description: 'Gold standard monitoring package checking sugar control and organ implications.',
      preparation: 'Take morning fasting sample, consume standard breakfast, then collect PP sample after 2 hours.',
      displayOrder: 13,
      testNames: ['Blood Sugar Fasting', 'HbA1c – 3-Month Average', 'Blood Sugar PP', 'Insulin Fasting', 'Urine Routine & Microscopy', 'Liver Function Test (LFT)'],
      preparationGuidelines: [
        { title: 'Fasting Sample First', description: 'Do not eat anything after midnight. The fasting blood sample must be collected before breakfast or any food intake.', displayOrder: 1 },
        { title: 'Eat a Standard Meal After Fasting Sample', description: 'After the fasting blood is drawn, eat your usual breakfast (two chapatis, idli, or equivalent). Avoid unusually heavy or light meals — eat what you normally eat.', displayOrder: 2 },
        { title: 'Post-Meal (PP) Sample After Exactly 2 Hours', description: 'The post-prandial sample must be collected exactly 2 hours after the first bite of food. Our phlebotomist will time this for you.', displayOrder: 3 },
        { title: 'Take Diabetes Medications as Usual', description: 'Continue your Metformin, insulin, or other diabetes drugs as prescribed. Do not skip doses before the test — this would give a falsely low sugar reading.', displayOrder: 4 },
        { title: 'Urine Sample — First Morning Void', description: 'Collect your very first urine sample of the morning in the clean container provided. This is the most concentrated and diagnostically relevant sample.', displayOrder: 5 },
      ],
      faqs: [
        { question: 'How often should diabetics do this panel?', answer: 'Every 3 months is the recommended monitoring frequency for diagnosed diabetics. HbA1c reflects 3-month average sugar control and is the primary monitoring metric.', displayOrder: 1 },
        { question: 'What is the target HbA1c for a diabetic?', answer: 'For most adults with Type 2 Diabetes, the target HbA1c is below 7.0% (53 mmol/mol). Your doctor may set a different target based on your age and comorbidities.', displayOrder: 2 },
        { question: 'Why is urine tested for diabetes monitoring?', answer: 'Diabetic nephropathy (kidney damage) begins silently. Urine routine detects protein (microalbuminuria) and glucose spillage — early warning signs of kidney involvement.', displayOrder: 3 },
        { question: 'What does elevated fasting insulin indicate?', answer: 'High fasting insulin with normal blood sugar indicates insulin resistance — a pre-diabetic state. It means your pancreas is working extra hard to maintain sugar levels.', displayOrder: 4 },
        { question: 'Can Type 1 diabetics take this panel?', answer: 'Yes, with modifications. Type 1 diabetics should discuss medication timing with their endocrinologist before the test as insulin dosing interacts with both fasting and PP readings.', displayOrder: 5 },
      ],
    },
    {
      name: 'SevaHeart Care', subtitle: 'Cardiac Patients · High-Risk Adults',
      category: 'Heart Care', categoryId: 'heart_care',
      price: 1249, oldPrice: 2800, discount: '55% OFF', parametersCount: 44,
      reportTime: '24 Hours', fastingRequired: true, homeCollection: true,
      description: 'Assessing cardiac strain levels, blockage risk markers, and metabolic states.',
      preparation: 'Strictly 12 hours fasting. Avoid high fat meals 48 hours prior.',
      displayOrder: 14,
      testNames: ['Lipid Profile (7 param)', 'Troponin I', 'CRP (Cardiac Risk)', 'Complete Blood Count (CBC)', 'Blood Sugar Fasting'],
      preparationGuidelines: [
        { title: 'Strict 12-Hour Fast', description: 'Lipid profile accuracy depends on complete fasting. Do not consume anything other than water for 12 hours.', displayOrder: 1 },
        { title: 'Avoid High-Fat Food 48 Hours Before', description: 'Fatty foods in the 48 hours preceding the test can cause persistent lipemia (fatty blood) affecting LDL, HDL, and triglyceride readings.', displayOrder: 2 },
        { title: 'Continue All Cardiac Medications', description: 'Do not stop aspirin, beta-blockers, statins, ACE inhibitors, or any cardiac medication before this test. These are essential for your safety.', displayOrder: 3 },
        { title: 'No Intense Physical Activity', description: 'Intense exercise elevates Troponin I even in healthy individuals. Avoid strenuous workouts for 24 hours before the test.', displayOrder: 4 },
        { title: 'Avoid Smoking on Test Day', description: 'Smoking acutely elevates CRP and affects lipid metabolism. Do not smoke for at least 4 hours before sample collection.', displayOrder: 5 },
      ],
      faqs: [
        { question: 'Does an elevated Troponin always mean a heart attack?', answer: 'Not necessarily in a screening context. Troponin can be elevated by intense exercise, dehydration, kidney disease, or heart failure. Significant elevations require immediate physician evaluation.', displayOrder: 1 },
        { question: 'What is the ideal LDL level for someone with heart disease?', answer: 'For patients with known coronary artery disease, the target LDL is below 70 mg/dL. For high-risk individuals without prior events, target is below 100 mg/dL.', displayOrder: 2 },
        { question: 'Can I take this test if I recently had a heart attack?', answer: 'Yes, but only after your cardiologist clears you. Post-MI Troponin levels remain elevated for 1–2 weeks and reference ranges are interpreted differently in acute settings.', displayOrder: 3 },
        { question: 'How does CRP relate to heart disease?', answer: 'High-sensitivity CRP (hsCRP) above 2 mg/L indicates systemic inflammation which accelerates atherosclerosis (arterial plaque buildup) — a primary cause of heart attacks.', displayOrder: 4 },
      ],
    },
    {
      name: 'SevaThyroid Advanced', subtitle: 'Thyroid Patients · 5-Marker Panel',
      category: 'Thyroid Care', categoryId: 'thyroid_care',
      price: 849, oldPrice: 1800, discount: '53% OFF', parametersCount: 5,
      reportTime: '24 Hours', fastingRequired: false, homeCollection: true,
      description: 'Complete immunological evaluation detecting Hashimoto\'s, Graves, and thyroid errors.',
      preparation: 'Do not take thyroid hormone medication before the morning blood draw.',
      displayOrder: 15,
      testNames: ['Thyroid Profile T3/T4/TSH', 'Thyroid Free FT3/FT4/TSH', 'TSH Ultra Sensitive', 'Anti TPO Antibody'],
      preparationGuidelines: [
        { title: 'Take Thyroid Medication AFTER Blood Draw', description: 'Levothyroxine (Eltroxin), liothyronine, or any thyroid hormone replacement must be taken only after blood sample collection. Taking it before creates a transient T4 spike.', displayOrder: 1 },
        { title: 'No Fasting Required', description: 'Thyroid hormones are not affected by food intake. You may eat and drink normally before this test.', displayOrder: 2 },
        { title: 'Stop Biotin Supplements for 48 Hours', description: 'Biotin (Vitamin B7) — commonly found in hair and nail supplements — significantly interferes with immunoassay-based thyroid tests, especially TSH and Anti-TPO. Stop biotin 48 hours before.', displayOrder: 3 },
        { title: 'Avoid Iodine Contrast Agents', description: 'If you recently had a CT scan with contrast dye, wait at least 4–6 weeks before thyroid testing as iodine contrast affects thyroid hormone synthesis.', displayOrder: 4 },
        { title: 'Inform About Amiodarone or Lithium Use', description: 'These medications profoundly affect thyroid function. Inform the lab and your doctor if you are on amiodarone, lithium, or interferon therapy.', displayOrder: 5 },
      ],
      faqs: [
        { question: 'What is the difference between TSH and Free FT3/FT4?', answer: 'TSH is the pituitary signal to the thyroid gland. FT3 and FT4 are the active thyroid hormones in circulation. TSH can be normal while Free hormones are abnormal in subclinical dysfunction.', displayOrder: 1 },
        { question: 'What does a positive Anti-TPO Antibody mean?', answer: 'Elevated Anti-TPO antibodies indicate autoimmune thyroid disease, most commonly Hashimoto\'s thyroiditis. It means your immune system is attacking your thyroid gland. This requires physician follow-up.', displayOrder: 2 },
        { question: 'Can I test thyroid during pregnancy?', answer: 'Yes, thyroid testing is essential during pregnancy. Reference ranges change in each trimester. Always provide the gestational week when submitting samples.', displayOrder: 3 },
        { question: 'How often should thyroid patients be monitored?', answer: 'Every 3–6 months until stable on medication, then annually once dose is optimized.', displayOrder: 4 },
        { question: 'What is TSH Ultra Sensitive and when is it used?', answer: 'Ultra-sensitive TSH can detect very low TSH levels that standard TSH assays may miss. It is useful for monitoring hyperthyroidism treatment and thyroid cancer surveillance.', displayOrder: 5 },
      ],
    },
    {
      name: 'SevaFever Panel', subtitle: 'Fever Workup · Unknown Origin',
      category: 'Fever Care', categoryId: 'fever_care',
      price: 949, oldPrice: 2200, discount: '57% OFF', parametersCount: 28,
      reportTime: '24 Hours', fastingRequired: false, homeCollection: true,
      isTrending: true,
      description: 'Expedited viral, parasitic, and bacterial fever panel.',
      preparation: 'No special preparation. Can be booked 24/7 for urgent fever investigation.',
      displayOrder: 16,
      testNames: ['Dengue Duo NS1+IgG+IgM', 'Typhoid Rapid Test', 'Malaria PF/PV Rapid', 'CRP Quantitative', 'Complete Blood Count (CBC)', 'ESR (Westergren Method)'],
      preparationGuidelines: [
        { title: 'No Fasting Required', description: 'This is an emergency diagnostic panel. No fasting is needed. Book and collect at any time of day.', displayOrder: 1 },
        { title: 'Test During Active Fever', description: 'For the most diagnostic yield, collect samples when body temperature is elevated (ideally above 99°F). Testing during afebrile periods can produce false-negative results for malaria.', displayOrder: 2 },
        { title: 'Do Not Take Antibiotics Before Testing', description: 'Antibiotic consumption before sample collection can suppress bacterial growth and produce false-negative Typhoid results. Test before starting antibiotics where possible.', displayOrder: 3 },
        { title: 'Mention Recent Travel History', description: 'Travel to endemic regions (Northeast India, Africa, South-East Asia) is crucial context for malaria and dengue interpretation. Mention it to the phlebotomist.', displayOrder: 4 },
      ],
      faqs: [
        { question: 'When should I test for Dengue?', answer: 'NS1 antigen is most accurate in the first 5 days of fever. IgM antibodies appear after Day 5. Dengue Duo tests both simultaneously, covering the full diagnostic window.', displayOrder: 1 },
        { question: 'Can this panel diagnose COVID-19?', answer: 'No. This panel covers dengue, typhoid, and malaria. For COVID-19 diagnosis, a separate RTPCR or rapid antigen test is required.', displayOrder: 2 },
        { question: 'What if all fever tests are negative?', answer: 'Negative results for dengue, typhoid, and malaria suggest a viral fever of other origin (influenza, adenovirus, etc.) which typically resolves with symptomatic management. Consult your physician.', displayOrder: 3 },
        { question: 'How quickly will I get the fever panel results?', answer: 'Dengue NS1 and Malaria rapid tests provide preliminary results within hours. The complete digital report is available within 24 hours of sample collection.', displayOrder: 4 },
      ],
    },
    {
      name: 'SevaAnemia Care', subtitle: 'Iron Deficiency · Low Hemoglobin',
      category: 'Anemia Care', categoryId: 'anemia_care',
      price: 649, oldPrice: 1400, discount: '54% OFF', parametersCount: 18,
      reportTime: '24 Hours', fastingRequired: true, homeCollection: true,
      description: 'Ideal for patients experiencing chronic fatigue or verified low Hemoglobin.',
      preparation: 'Overnight fasting 10-12 hours. Avoid iron supplements 24 hours before.',
      displayOrder: 17,
      testNames: ['Complete Blood Count (CBC)', 'Iron Profile', 'Vitamin B12 (Cobalamin)', 'Peripheral Smear Examination'],
      preparationGuidelines: [
        { title: 'Stop Iron Supplements 24 Hours Before', description: 'Iron tablets, syrups, or injections taken in the 24 hours before the test will falsely elevate serum iron and transferrin saturation, masking true iron deficiency.', displayOrder: 1 },
        { title: '10–12 Hour Fast', description: 'Fasting is required for Iron Profile accuracy. Non-fasting samples can show transient iron elevation from dietary iron absorption.', displayOrder: 2 },
        { title: 'Stop Vitamin B12 Injections for 48 Hours', description: 'Recent Vitamin B12 injections (cyanocobalamin/methylcobalamin) will cause falsely very high B12 levels. Hold for 48 hours if possible.', displayOrder: 3 },
        { title: 'Avoid Red Meat the Night Before', description: 'Consuming red meat (lamb, beef) in the 24 hours before the test can transiently elevate serum iron. Eat vegetarian or chicken the night before.', displayOrder: 4 },
      ],
      faqs: [
        { question: 'What is the difference between iron deficiency and anemia?', answer: 'Iron deficiency is when your body stores of iron are low (shown by low ferritin). Anemia is when hemoglobin drops below the normal range. You can have iron deficiency without anemia in the early stages.', displayOrder: 1 },
        { question: 'Why is Peripheral Smear included?', answer: 'Peripheral smear allows a pathologist to visually examine the size, shape, and appearance of red blood cells — identifying microcytic anemia (iron deficiency), macrocytic anemia (B12 deficiency), and sickle cell disorders.', displayOrder: 2 },
        { question: 'Can children take this panel?', answer: 'Yes. Anemia is very common in children due to dietary deficiencies. Paediatric reference ranges apply. Our phlebotomists are trained in paediatric venipuncture.', displayOrder: 3 },
        { question: 'How long does it take to correct iron deficiency?', answer: 'With appropriate supplementation, ferritin levels typically normalize in 3–6 months. Hemoglobin recovery begins within 4–8 weeks of starting iron therapy.', displayOrder: 4 },
      ],
    },
    {
      name: 'SevaPregnancy Panel', subtitle: 'Pregnant Women · Antenatal Profile',
      category: 'Pregnancy', categoryId: 'pregnancy',
      price: 1849, oldPrice: 4200, discount: '56% OFF', parametersCount: 32,
      reportTime: '24 Hours', fastingRequired: true, homeCollection: true,
      description: 'Essential 1st/2nd Trimester panel assessing infant transmission risks and maternal strength.',
      preparation: 'Fasting recommended. Collect first morning clean catch urine sample.',
      displayOrder: 18,
      testNames: ['Complete Blood Count (CBC)', 'Blood Sugar Fasting', 'Thyroid Profile T3/T4/TSH', 'Urine Routine & Microscopy', 'Blood Group & Rh Typing', 'HbA1c – 3-Month Average'],
      preparationGuidelines: [
        { title: '8-Hour Fasting Recommended', description: 'Fast for 8 hours before the blood draw. Prolonged fasting beyond 10 hours is not recommended during pregnancy as it can cause hypoglycemia.', displayOrder: 1 },
        { title: 'First Morning Urine — Clean Catch', description: 'Collect the midstream portion of your first morning urine in the sterile container provided. Clean the area before collection to avoid contamination.', displayOrder: 2 },
        { title: 'Mention Gestational Week', description: 'Always inform the phlebotomist of your exact gestational week. Reference ranges for TSH, hemoglobin, and blood sugar change each trimester.', displayOrder: 3 },
        { title: 'Continue Prenatal Vitamins', description: 'Do not stop folic acid, iron, or calcium supplements prescribed by your OB/GYN. These are essential for fetal development and should not be held for a blood test.', displayOrder: 4 },
        { title: 'Rh-Negative Women — Inform Your Doctor', description: 'If your blood group is Rh-negative and your partner is Rh-positive, your doctor may prescribe Anti-D injection at specific gestational milestones. Blood group confirmation here is the first step.', displayOrder: 5 },
      ],
      faqs: [
        { question: 'Why is thyroid testing essential during pregnancy?', answer: 'Untreated hypothyroidism during pregnancy is associated with miscarriage, pre-term birth, and impaired fetal brain development. The fetus depends entirely on maternal thyroid hormone in the first trimester.', displayOrder: 1 },
        { question: 'What is Gestational Diabetes and does this panel screen for it?', answer: 'Gestational Diabetes (GDM) is high blood sugar arising during pregnancy. This panel includes fasting blood sugar and HbA1c as initial screening. A formal GTT (Glucose Tolerance Test) is recommended at 24–28 weeks.', displayOrder: 2 },
        { question: 'Why is blood group testing needed during pregnancy?', answer: 'Blood group and Rh type are critical for blood transfusion planning during delivery and for detecting Rh incompatibility between mother and fetus — which can cause hemolytic disease of the newborn.', displayOrder: 3 },
        { question: 'Is home collection safe during pregnancy?', answer: 'Yes. Home collection eliminates the physical stress and infection risk of hospital visits, making it the preferred option for pregnant women. Our phlebotomists are trained in maternal care protocols.', displayOrder: 4 },
        { question: 'How many times should this panel be done during pregnancy?', answer: 'Typically once in each trimester (3 times total). Your OB/GYN will guide frequency based on your individual risk profile.', displayOrder: 5 },
      ],
    },
    {
      name: 'SevaFertility Women', subtitle: 'Women Trying to Conceive · AMH+',
      category: 'Fertility Women', categoryId: 'fertility_women',
      price: 1749, oldPrice: 3900, discount: '55% OFF', parametersCount: 22,
      reportTime: '24 Hours', fastingRequired: true, homeCollection: true,
      description: 'Determining ovarian reserve values (AMH) and baseline conception hormones.',
      preparation: 'Strictly recommended on Day 2, 3 or 4 of Menstrual cycle. 10 hours fasting.',
      displayOrder: 19,
      testNames: ['Thyroid Profile T3/T4/TSH', 'Blood Sugar Fasting', 'Vitamin D Total (25-OH)', 'Complete Blood Count (CBC)'],
      preparationGuidelines: [
        { title: 'Day 2, 3, or 4 of Menstrual Cycle — Mandatory', description: 'FSH, LH, and Estradiol must be measured in the early follicular phase. Day 1 is the first day of full menstrual flow. Day 2 or Day 3 is ideal.', displayOrder: 1 },
        { title: 'AMH Can Be Done Any Day', description: 'Anti-Müllerian Hormone (AMH) — the primary ovarian reserve marker — is the exception. AMH does not vary with cycle and can be tested on any day.', displayOrder: 2 },
        { title: '10-Hour Fast Before Blood Draw', description: 'Fast for 10 hours before the test. Water is permitted. This is required for accurate blood sugar and progesterone levels.', displayOrder: 3 },
        { title: 'Pause Oral Contraceptives', description: 'OCP use suppresses FSH, LH, and Estradiol to very low levels artificially. Ideally, stop OCP 1–2 cycles before this fertility panel for accurate baseline readings.', displayOrder: 4 },
        { title: 'Do Not Take Fertility Medications Before Test', description: 'Clomiphene (Clomid), gonadotropins, or other fertility drugs profoundly alter hormone levels. This baseline panel should be done before starting any fertility treatment cycle.', displayOrder: 5 },
      ],
      faqs: [
        { question: 'What is AMH and what does it tell me?', answer: 'Anti-Müllerian Hormone (AMH) reflects your ovarian reserve — the number of remaining eggs. Low AMH indicates diminished ovarian reserve, which affects natural conception and IVF success rates.', displayOrder: 1 },
        { question: 'What is considered a normal AMH level?', answer: 'Normal AMH for reproductive-age women is 1.0–3.5 ng/mL. Values below 0.5 ng/mL suggest very low ovarian reserve. Values above 3.5 may indicate PCOS.', displayOrder: 2 },
        { question: 'Why is thyroid function included in a fertility panel?', answer: 'Hypothyroidism — even subclinical — is a leading cause of anovulation, irregular cycles, and early pregnancy loss. Normalizing TSH dramatically improves conception rates.', displayOrder: 3 },
        { question: 'Can I take this test if I have PCOS?', answer: 'Yes. Women with PCOS typically show elevated LH with low FSH ratio, high AMH, and insulin resistance (detectable via fasting insulin). This panel helps characterize the PCOS hormonal pattern.', displayOrder: 4 },
        { question: 'How long before trying to conceive should I do this test?', answer: 'Ideally 3–6 months before actively trying. This gives time to address deficiencies, optimize thyroid levels, and consult a reproductive specialist if needed.', displayOrder: 5 },
      ],
    },
    {
      name: 'SevaFertility Men', subtitle: 'Men Fertility Assessment · SA+',
      category: 'Fertility Men', categoryId: 'fertility_men',
      price: 1449, oldPrice: 3200, discount: '55% OFF', parametersCount: 18,
      reportTime: '24 Hours', fastingRequired: true, homeCollection: true,
      description: 'Key andrology analytics combined with foundational male metabolic metrics.',
      preparation: 'Semen sample requires 3-5 days of sexual abstinence before collection. Blood needs fasting.',
      displayOrder: 20,
      testNames: ['Complete Blood Count (CBC)', 'Blood Sugar Fasting', 'Thyroid Profile T3/T4/TSH', 'Vitamin D Total (25-OH)'],
      preparationGuidelines: [
        { title: 'Sexual Abstinence 3–5 Days Before Semen Collection', description: 'For semen analysis, abstain from ejaculation for exactly 3–5 days before sample collection. Less than 3 days reduces sperm count; more than 5 days reduces motility.', displayOrder: 1 },
        { title: 'Blood Sample Requires 10-Hour Fast', description: 'The blood component (testosterone, thyroid, blood sugar) requires a 10-hour fast. Schedule semen collection and blood draw at the same appointment.', displayOrder: 2 },
        { title: 'Semen Collection at Home — Proper Protocol', description: 'Collect semen sample by masturbation into the sterile container provided. Do not use lubricants, condoms, or saliva as these contain spermicidal agents. Ensure the entire ejaculate is collected.', displayOrder: 3 },
        { title: 'Deliver Semen Within 60 Minutes', description: 'Semen analysis must be performed within 60 minutes of ejaculation. Keep the container at body temperature (in a shirt pocket) during transport. Temperature extremes damage sperm.', displayOrder: 4 },
        { title: 'Avoid Anabolic Steroids and Testosterone', description: 'External testosterone and anabolic steroids suppress the body\'s own testosterone production and dramatically reduce sperm count (azoospermia). Inform the lab if you use these.', displayOrder: 5 },
        { title: 'No Alcohol or Smoking for 72 Hours', description: 'Alcohol and nicotine reduce sperm motility and increase DNA fragmentation. Abstain for at least 72 hours before collection for accurate semen analysis.', displayOrder: 6 },
      ],
      faqs: [
        { question: 'What are the normal parameters in a semen analysis?', answer: 'Normal values: sperm count above 15 million/mL, total motility above 40%, progressive motility above 32%, normal morphology above 4% (Kruger strict criteria). WHO 2021 reference values apply.', displayOrder: 1 },
        { question: 'Can low testosterone be the cause of male infertility?', answer: 'Yes. Testosterone is essential for sperm production (spermatogenesis). Low testosterone leads to reduced sperm count and libido. This panel simultaneously checks both.', displayOrder: 2 },
        { question: 'Does Vitamin D affect male fertility?', answer: 'Emerging evidence shows Vitamin D deficiency is associated with poor sperm motility and reduced testosterone. Supplementation in deficient men has shown improvement in semen parameters.', displayOrder: 3 },
        { question: 'What should I do if my semen analysis is abnormal?', answer: 'A single abnormal semen analysis is not diagnostic. Repeat after 3 months (one full sperm production cycle). If two consecutive tests are abnormal, consult a urologist or andrologist.', displayOrder: 4 },
        { question: 'How does thyroid disease affect male fertility?', answer: 'Both hypothyroidism and hyperthyroidism impair sperm quality. Untreated thyroid disease in men leads to poor sperm motility and morphology. Thyroid normalization typically reverses these effects.', displayOrder: 5 },
      ],
    },
  ];

  for (const pkg of packages) {
    const { testNames, preparationGuidelines, faqs, ...pkgData } = pkg;
    const createdPkg = await prisma.healthPackage.create({ data: pkgData });

    for (const testName of testNames) {
      const test = findTest(testName);
      if (test) {
        await prisma.packageTest.create({
          data: { packageId: createdPkg.id, testId: test.id },
        });
      } else {
        console.warn(`Test not found for package "${pkg.name}": ${testName}`);
      }
    }

    for (const guideline of preparationGuidelines) {
      await prisma.packagePreparation.create({
        data: { packageId: createdPkg.id, ...guideline },
      });
    }

    for (const faq of faqs) {
      await prisma.packageFAQ.create({
        data: { packageId: createdPkg.id, ...faq },
      });
    }
  }

  console.log(`Packages seeded (${packages.length} packages with guidelines and FAQs)`);
}