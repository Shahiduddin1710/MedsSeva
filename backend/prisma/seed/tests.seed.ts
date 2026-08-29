import { PrismaClient } from '@prisma/client';

export async function seedTests(prisma: PrismaClient) {
  console.log('Seeding tests...');

  await prisma.test.createMany({
    skipDuplicates: true,
    data: [
      {
        name: 'Complete Blood Count (CBC)',
        description: '24 parameters: RBC, WBC, Hb, Platelets, Differential.',
        price: 499, discountedPrice: 299,
        categoryId: 'blood',
        reportTime: '12 Hours', fastingRequired: false, homeCollection: true,
        rating: 4.8, reviewCount: 1240, displayOrder: 1,
        isFeatured: true, isPopular: true,
        whyRequired: 'CBC is a fundamental test used to evaluate your overall health and detect a wide range of disorders, including anemia, infection and leukemia.',
      },
      {
        name: 'ESR (Westergren Method)',
        description: 'Inflammation marker - TB, infections, autoimmune.',
        price: 149, discountedPrice: 79,
        categoryId: 'blood',
        reportTime: '12 Hours', fastingRequired: false, homeCollection: true,
        rating: 4.6, reviewCount: 850, displayOrder: 2,
        whyRequired: 'Erythrocyte sedimentation rate (ESR) measures how quickly red blood cells settle at the bottom of a test tube.',
      },
      {
        name: 'Urine Routine & Microscopy',
        description: '19 parameters: Physical, Chemical, Microscopic exam.',
        price: 199, discountedPrice: 99,
        categoryId: 'blood',
        reportTime: '12 Hours', fastingRequired: false, homeCollection: true,
        rating: 4.9, reviewCount: 512, displayOrder: 3,
        whyRequired: 'Checks for signs of disease, such as diabetes or urinary tract infections.',
      },
      {
        name: 'Peripheral Smear Examination',
        description: 'Detects blood disorders and infections.',
        price: 349, discountedPrice: 199,
        categoryId: 'blood',
        reportTime: '24 Hours', fastingRequired: false, homeCollection: true,
        rating: 4.7, reviewCount: 312, displayOrder: 4,
        whyRequired: 'Provides information about the number and shape of blood cells to diagnose infections and blood disorders.',
      },
      {
        name: 'Blood Group & Rh Typing',
        description: 'Determines blood type and Rh factor.',
        price: 299, discountedPrice: 149,
        categoryId: 'blood',
        reportTime: '12 Hours', fastingRequired: false, homeCollection: true,
        rating: 4.8, reviewCount: 900, displayOrder: 5,
        whyRequired: 'Crucial test before a blood transfusion, surgery, or during pregnancy.',
      },
      {
        name: 'Blood Sugar Fasting',
        description: 'Glucose after 8–12 hr fast.',
        price: 149, discountedPrice: 79,
        categoryId: 'diabetes',
        reportTime: '12 Hours', fastingRequired: true, homeCollection: true,
        rating: 4.5, reviewCount: 320, displayOrder: 1,
        isPopular: true,
        whyRequired: 'Used to measure your blood sugar level after fasting. High levels can indicate diabetes or insulin resistance.',
      },
      {
        name: 'HbA1c – 3-Month Average',
        description: 'Gold standard diabetes monitoring.',
        price: 549, discountedPrice: 299,
        categoryId: 'diabetes',
        reportTime: '24 Hours', fastingRequired: false, homeCollection: true,
        rating: 4.9, reviewCount: 950, displayOrder: 2,
        isFeatured: true, isPopular: true,
        whyRequired: 'Tells you your average level of blood sugar over the past 2 to 3 months.',
      },
      {
        name: 'Blood Sugar PP',
        description: 'Checks sugar after meals.',
        price: 169, discountedPrice: 89,
        categoryId: 'diabetes',
        reportTime: '12 Hours', fastingRequired: false, homeCollection: true,
        rating: 4.6, reviewCount: 412, displayOrder: 3,
        whyRequired: 'Measures blood glucose exactly 2 hours after you start eating a meal.',
      },
      {
        name: 'Insulin Fasting',
        description: 'Measures insulin resistance.',
        price: 1099, discountedPrice: 699,
        categoryId: 'diabetes',
        reportTime: '24 Hours', fastingRequired: true, homeCollection: true,
        rating: 4.8, reviewCount: 210, displayOrder: 4,
        whyRequired: 'Helps evaluate insulin resistance, key in the development of type 2 diabetes.',
      },
      {
        name: 'Thyroid Profile T3/T4/TSH',
        description: 'Complete thyroid hormone assessment.',
        price: 649, discountedPrice: 349,
        categoryId: 'thyroid',
        reportTime: '12 Hours', fastingRequired: false, homeCollection: true,
        rating: 4.7, reviewCount: 430, displayOrder: 1,
        isPopular: true,
        whyRequired: 'Checks how well your thyroid gland is working and helps diagnose thyroid disorders.',
      },
      {
        name: 'Thyroid Free FT3/FT4/TSH',
        description: 'Free fraction - more accurate for patients on meds.',
        price: 799, discountedPrice: 449,
        categoryId: 'thyroid',
        reportTime: '24 Hours', fastingRequired: false, homeCollection: true,
        rating: 4.8, reviewCount: 670, displayOrder: 2,
        whyRequired: 'Measures free fractions of T3 and T4, providing a more accurate assessment.',
      },
      {
        name: 'TSH Ultra Sensitive',
        description: 'Detects thyroid imbalance.',
        price: 449, discountedPrice: 249,
        categoryId: 'thyroid',
        reportTime: '12 Hours', fastingRequired: false, homeCollection: true,
        rating: 4.6, reviewCount: 800, displayOrder: 3,
        whyRequired: 'Highly sensitive test for mild thyroid imbalances.',
      },
      {
        name: 'Anti TPO Antibody',
        description: 'Detects autoimmune thyroid disease.',
        price: 1399, discountedPrice: 799,
        categoryId: 'thyroid',
        reportTime: '24 Hours', fastingRequired: false, homeCollection: true,
        rating: 4.8, reviewCount: 310, displayOrder: 4,
        whyRequired: 'Used to diagnose Hashimoto\'s disease and other autoimmune thyroid disorders.',
      },
      {
        name: 'Lipid Profile (7 param)',
        description: 'Cholesterol, HDL, LDL, VLDL, Triglycerides, CRI.',
        price: 599, discountedPrice: 349,
        categoryId: 'cardiac',
        reportTime: '24 Hours', fastingRequired: true, homeCollection: true,
        rating: 4.8, reviewCount: 890, displayOrder: 1,
        isFeatured: true,
        whyRequired: 'Used to find abnormalities in lipids which can increase the risk of heart disease.',
      },
      {
        name: 'Troponin I',
        description: 'Gold standard heart attack marker.',
        price: 1299, discountedPrice: 799,
        categoryId: 'cardiac',
        reportTime: '6 Hours', fastingRequired: false, homeCollection: true,
        rating: 4.8, reviewCount: 890, displayOrder: 2,
        whyRequired: 'Measures cardiac-specific troponin in the blood to help detect heart injury.',
      },
      {
        name: 'CRP (Cardiac Risk)',
        description: 'Inflammation and heart risk marker.',
        price: 899, discountedPrice: 499,
        categoryId: 'cardiac',
        reportTime: '12 Hours', fastingRequired: false, homeCollection: true,
        rating: 4.7, reviewCount: 430, displayOrder: 3,
        whyRequired: 'High-sensitivity CRP measures inflammation linked to higher risk of heart disease.',
      },
      {
        name: 'Liver Function Test (LFT)',
        description: 'Measures liver enzymes and bilirubin.',
        price: 699, discountedPrice: 399,
        categoryId: 'liver',
        reportTime: '12 Hours', fastingRequired: false, homeCollection: true,
        rating: 4.8, reviewCount: 1200, displayOrder: 1,
        isPopular: true,
        whyRequired: 'Evaluates the overall health of your liver and helps diagnose liver diseases like hepatitis.',
      },
      {
        name: 'Bilirubin Total/Direct',
        description: 'Checks jaundice and liver condition.',
        price: 299, discountedPrice: 149,
        categoryId: 'liver',
        reportTime: '12 Hours', fastingRequired: false, homeCollection: true,
        rating: 4.6, reviewCount: 500, displayOrder: 2,
        whyRequired: 'High bilirubin levels can cause jaundice, a sign of liver or bile duct issues.',
      },
      {
        name: 'SGPT (ALT)',
        description: 'Liver enzyme test.',
        price: 299, discountedPrice: 149,
        categoryId: 'liver',
        reportTime: '12 Hours', fastingRequired: false, homeCollection: true,
        rating: 4.7, reviewCount: 800, displayOrder: 3,
        whyRequired: 'ALT is an enzyme found mostly in the liver; high levels indicate liver damage.',
      },
      {
        name: 'Hepatitis B Surface Antigen',
        description: 'Detects Hepatitis B infection.',
        price: 899, discountedPrice: 499,
        categoryId: 'liver',
        reportTime: '24 Hours', fastingRequired: false, homeCollection: true,
        rating: 4.9, reviewCount: 430, displayOrder: 4,
        whyRequired: 'Crucial screening test to determine active Hepatitis B infection.',
      },
      {
        name: 'Vitamin D Total (25-OH)',
        description: 'Bone health & immunity. Common deficiency.',
        price: 1299, discountedPrice: 799,
        categoryId: 'vitamins',
        reportTime: '24 Hours', fastingRequired: false, homeCollection: true,
        rating: 4.8, reviewCount: 890, displayOrder: 1,
        isFeatured: true, isPopular: true,
        whyRequired: 'Determines Vitamin D deficiency, essential for bone health and immune function.',
      },
      {
        name: 'Vitamin B12 (Cobalamin)',
        description: 'Nerve function & RBCs. Essential for vegetarians.',
        price: 849, discountedPrice: 499,
        categoryId: 'vitamins',
        reportTime: '24 Hours', fastingRequired: true, homeCollection: true,
        rating: 4.8, reviewCount: 890, displayOrder: 2,
        isPopular: true,
        whyRequired: 'Checks for Vitamin B12 deficiency which can cause anemia, fatigue, and nerve damage.',
      },
      {
        name: 'Iron Profile',
        description: 'Checks iron deficiency and anemia.',
        price: 1199, discountedPrice: 699,
        categoryId: 'vitamins',
        reportTime: '12 Hours', fastingRequired: false, homeCollection: true,
        rating: 4.7, reviewCount: 550, displayOrder: 3,
        whyRequired: 'Evaluates the amount of iron in your body and diagnoses iron-deficiency anemia.',
      },
      {
        name: 'Calcium Test',
        description: 'Bone health screening.',
        price: 349, discountedPrice: 199,
        categoryId: 'vitamins',
        reportTime: '12 Hours', fastingRequired: false, homeCollection: true,
        rating: 4.6, reviewCount: 320, displayOrder: 4,
        whyRequired: 'Used to screen for conditions related to bones, heart, nerves, and kidneys.',
      },
      {
        name: 'Dengue Duo NS1+IgG+IgM',
        description: '3-in-1 Dengue - NS1 antigen + IgG + IgM antibodies.',
        price: 1099, discountedPrice: 699,
        categoryId: 'fever',
        reportTime: '12 Hours', fastingRequired: false, homeCollection: true,
        rating: 4.8, reviewCount: 890, displayOrder: 1,
        isTrending: true,
        whyRequired: 'Used to diagnose dengue fever early by detecting antigens and antibodies.',
      },
      {
        name: 'Typhoid Rapid Test',
        description: 'Quick antigen detection - results in 15 minutes.',
        price: 349, discountedPrice: 199,
        categoryId: 'fever',
        reportTime: '1 Hours', fastingRequired: false, homeCollection: true,
        rating: 4.8, reviewCount: 890, displayOrder: 2,
        isTrending: true,
        whyRequired: 'Rapid detection of Salmonella Typhi antigens for quick typhoid diagnosis.',
      },
      {
        name: 'Malaria PF/PV Rapid',
        description: 'Differentiates P. Falciparum vs P. Vivax rapidly.',
        price: 449, discountedPrice: 249,
        categoryId: 'fever',
        reportTime: '1 Hours', fastingRequired: false, homeCollection: true,
        rating: 4.8, reviewCount: 890, displayOrder: 3,
        isTrending: true,
        whyRequired: 'Rapid diagnosis of Malaria and differentiation of species for appropriate treatment.',
      },
      {
        name: 'CRP Quantitative',
        description: 'Detects infection and inflammation.',
        price: 649, discountedPrice: 349,
        categoryId: 'fever',
        reportTime: '12 Hours', fastingRequired: false, homeCollection: true,
        rating: 4.7, reviewCount: 550, displayOrder: 4,
        whyRequired: 'Indicates presence of inflammation, useful for diagnosing bacterial infections.',
      },
      {
        name: 'COVID-19 RT PCR',
        description: 'Coronavirus detection test.',
        price: 1499, discountedPrice: 799,
        categoryId: 'fever',
        reportTime: '24 Hours', fastingRequired: false, homeCollection: true,
        rating: 4.9, reviewCount: 2000, displayOrder: 5,
        whyRequired: 'Gold standard test to accurately detect the SARS-CoV-2 virus.',
      },
    ],
  });

  const tests = await prisma.test.findMany({ select: { id: true, name: true } });
  const byName = (name: string) => tests.find(t => t.name === name)?.id;

  const prepData: {
    testName: string;
    items: { title: string; description: string; appliesTo: 'HOME' | 'LAB' | 'BOTH'; displayOrder: number }[];
  }[] = [
    {
      testName: 'Complete Blood Count (CBC)',
      items: [
        { title: 'No Fasting Required', description: 'You may eat and drink normally before a CBC test. Fasting does not affect CBC results.', appliesTo: 'BOTH', displayOrder: 1 },
        { title: 'Stay Hydrated', description: 'Drink 2–3 glasses of water before sample collection. Good hydration makes vein access easier and improves sample quality.', appliesTo: 'BOTH', displayOrder: 2 },
        { title: 'Avoid Strenuous Exercise', description: 'Avoid heavy exercise for at least 12 hours before the test. Intense physical activity can temporarily alter WBC and platelet counts.', appliesTo: 'BOTH', displayOrder: 3 },
        { title: 'Inform About Medications', description: 'Inform the phlebotomist if you are on blood thinners, antibiotics, or steroids. These can affect CBC values.', appliesTo: 'BOTH', displayOrder: 4 },
        { title: 'Wear Loose-Fitting Clothes', description: 'Wear a short-sleeved or loose-sleeved shirt to allow easy access to your arm for blood collection.', appliesTo: 'HOME', displayOrder: 5 },
        { title: 'Keep Your Arm Accessible', description: 'Clear a clean surface or sit near a table where the phlebotomist can comfortably draw blood.', appliesTo: 'HOME', displayOrder: 6 },
        { title: 'Carry a Valid ID', description: 'Please carry a government-issued photo ID (Aadhaar, PAN, or Passport) when visiting the branch.', appliesTo: 'LAB', displayOrder: 5 },
        { title: 'Arrive 10 Minutes Early', description: 'Reach the branch at least 10 minutes before your scheduled time to complete registration formalities smoothly.', appliesTo: 'LAB', displayOrder: 6 },
      ],
    },
    {
      testName: 'ESR (Westergren Method)',
      items: [
        { title: 'No Fasting Needed', description: 'ESR does not require fasting. You may eat and drink as usual before the test.', appliesTo: 'BOTH', displayOrder: 1 },
        { title: 'Avoid Anti-Inflammatory Drugs', description: 'Medications such as aspirin, ibuprofen, or corticosteroids can suppress ESR values. Inform your doctor before the test.', appliesTo: 'BOTH', displayOrder: 2 },
        { title: 'Rest Before Sample Collection', description: 'Avoid physical exertion or stress for at least 30 minutes before the test, as these can temporarily elevate ESR.', appliesTo: 'BOTH', displayOrder: 3 },
        { title: 'Prepare a Clean Area', description: 'Ensure a clean, well-lit area is available for the phlebotomist to perform collection comfortably.', appliesTo: 'HOME', displayOrder: 4 },
        { title: 'Bring Previous Reports', description: 'If you have been diagnosed with an inflammatory condition, bring your previous ESR or CRP reports for comparison.', appliesTo: 'LAB', displayOrder: 4 },
      ],
    },
    {
      testName: 'Urine Routine & Microscopy',
      items: [
        { title: 'Collect First Morning Sample', description: 'The first urine of the morning is the most concentrated and gives the most accurate results. Collect it in a clean, dry container.', appliesTo: 'BOTH', displayOrder: 1 },
        { title: 'Clean Catch Method', description: 'Clean the genital area with water before collecting urine. Discard the first few drops, then collect the midstream urine into the container.', appliesTo: 'BOTH', displayOrder: 2 },
        { title: 'Avoid Certain Foods the Night Before', description: 'Avoid beetroot, blackberries, vitamin C supplements, and excess vitamin B12 the night before, as these can discolor urine and affect results.', appliesTo: 'BOTH', displayOrder: 3 },
        { title: 'Do Not Collect During Menstruation', description: 'Female patients should avoid collecting urine samples during their menstrual period to prevent contamination of the sample.', appliesTo: 'BOTH', displayOrder: 4 },
        { title: 'Provide Sample Promptly', description: 'Once collected, hand over the urine sample to our phlebotomist immediately. Do not keep it for more than 30 minutes at room temperature.', appliesTo: 'HOME', displayOrder: 5 },
        { title: 'Use the Provided Container', description: 'We will provide a sterile sample container. Do not use any other container for collection.', appliesTo: 'HOME', displayOrder: 6 },
        { title: 'Collect at the Branch', description: 'A clean restroom and sterile container will be available at our branch. Inform the reception upon arrival for urine sample collection.', appliesTo: 'LAB', displayOrder: 5 },
      ],
    },
    {
      testName: 'Peripheral Smear Examination',
      items: [
        { title: 'No Fasting Required', description: 'Fasting is not necessary for a peripheral smear. You may eat and drink normally.', appliesTo: 'BOTH', displayOrder: 1 },
        { title: 'Disclose Recent Infections', description: 'Inform the phlebotomist if you have had a recent fever, viral illness, or bacterial infection. This helps the pathologist interpret the smear correctly.', appliesTo: 'BOTH', displayOrder: 2 },
        { title: 'Disclose Current Medications', description: 'Certain medications like chemotherapy drugs, antivirals, and corticosteroids can alter white blood cell morphology. Disclose all current medications.', appliesTo: 'BOTH', displayOrder: 3 },
        { title: 'Wear Accessible Clothing', description: 'Wear clothing that allows easy access to the forearm for blood collection.', appliesTo: 'HOME', displayOrder: 4 },
        { title: 'Bring Referral Slip', description: 'Carry your doctor\'s referral or prescription indicating the reason for the peripheral smear. This assists in targeted analysis.', appliesTo: 'LAB', displayOrder: 4 },
      ],
    },
    {
      testName: 'Blood Group & Rh Typing',
      items: [
        { title: 'No Special Preparation', description: 'Blood group and Rh typing require no fasting or special preparation. You may eat and drink normally.', appliesTo: 'BOTH', displayOrder: 1 },
        { title: 'Recent Transfusions', description: 'If you have received a blood transfusion in the past 3 months, inform the phlebotomist. This may temporarily affect blood typing results.', appliesTo: 'BOTH', displayOrder: 2 },
        { title: 'Stay Hydrated', description: 'Drink water before the test to ensure adequate hydration and easier blood draw.', appliesTo: 'BOTH', displayOrder: 3 },
        { title: 'Carry ID and Previous Blood Group Card', description: 'If you have a blood group card issued previously, bring it along for cross-verification at the branch.', appliesTo: 'LAB', displayOrder: 4 },
      ],
    },
    {
      testName: 'Blood Sugar Fasting',
      items: [
        { title: 'Fast for 8–12 Hours', description: 'Do not eat or drink anything (other than plain water) for 8 to 12 hours before the test. This is essential for accurate fasting glucose measurement.', appliesTo: 'BOTH', displayOrder: 1 },
        { title: 'Plain Water is Allowed', description: 'You may drink plain water during the fasting period. Avoid tea, coffee, juice, or any sweetened beverage.', appliesTo: 'BOTH', displayOrder: 2 },
        { title: 'Take Morning Test', description: 'Schedule the test in the morning after overnight fasting for best results and convenience.', appliesTo: 'BOTH', displayOrder: 3 },
        { title: 'Consult Doctor About Medications', description: 'If you are on diabetes medications or insulin, consult your doctor whether to take them before the test. Do not modify doses without medical advice.', appliesTo: 'BOTH', displayOrder: 4 },
        { title: 'Avoid Smoking Before the Test', description: 'Do not smoke for at least 1 hour before the test. Nicotine can affect blood glucose levels.', appliesTo: 'BOTH', displayOrder: 5 },
        { title: 'Be Ready at Your Slot Time', description: 'Our phlebotomist will arrive during your selected slot. Ensure you are available and have completed your fasting period by then.', appliesTo: 'HOME', displayOrder: 6 },
        { title: 'Arrive Fasted at the Branch', description: 'Come directly to the branch after your overnight fast. Do not eat anything on the way. Carry your prescription or doctor\'s advice slip.', appliesTo: 'LAB', displayOrder: 6 },
      ],
    },
    {
      testName: 'HbA1c – 3-Month Average',
      items: [
        { title: 'No Fasting Required', description: 'HbA1c reflects average blood sugar over 3 months and is not affected by recent meals. You may eat and drink normally before this test.', appliesTo: 'BOTH', displayOrder: 1 },
        { title: 'Disclose Hemoglobin Disorders', description: 'If you have sickle cell disease, thalassemia, or any other hemoglobin variant condition, inform the phlebotomist. These can affect HbA1c accuracy.', appliesTo: 'BOTH', displayOrder: 2 },
        { title: 'Inform About Recent Transfusions', description: 'Recent blood transfusions can dilute HbA1c readings. Inform the staff if you have had a transfusion in the last 3 months.', appliesTo: 'BOTH', displayOrder: 3 },
        { title: 'No Exercise Restriction', description: 'Normal daily activities and exercise do not affect HbA1c. No specific activity restriction is needed before the test.', appliesTo: 'BOTH', displayOrder: 4 },
      ],
    },
    {
      testName: 'Blood Sugar PP',
      items: [
        { title: 'Eat a Standard Meal', description: 'Have your normal meal (breakfast or lunch) exactly 2 hours before the test time. Do not eat a very light or very heavy meal — eat what you would normally.', appliesTo: 'BOTH', displayOrder: 1 },
        { title: 'Sample Collected 2 Hours After Meal', description: 'The blood sample should be collected exactly 2 hours after the first bite of your meal. Time your meal carefully.', appliesTo: 'BOTH', displayOrder: 2 },
        { title: 'Avoid Snacking Between Meals', description: 'Do not eat or drink anything other than plain water between the meal and the blood collection.', appliesTo: 'BOTH', displayOrder: 3 },
        { title: 'Avoid Strenuous Activity After Eating', description: 'Do not exercise vigorously between your meal and sample collection, as this can artificially lower post-meal blood sugar.', appliesTo: 'BOTH', displayOrder: 4 },
        { title: 'Schedule the Slot After Your Meal', description: 'Book your home collection slot 2 hours after your planned meal time. Inform the phlebotomist of your exact meal time when they arrive.', appliesTo: 'HOME', displayOrder: 5 },
        { title: 'Coordinate Meal Timing at Branch', description: 'Inform the branch of your meal time when you arrive. Sample will be drawn exactly 2 hours post-meal.', appliesTo: 'LAB', displayOrder: 5 },
      ],
    },
    {
      testName: 'Insulin Fasting',
      items: [
        { title: 'Fast for 10–12 Hours', description: 'A strict fast of 10 to 12 hours is mandatory. Do not consume any food, beverages (except water), or chewing gum during the fasting period.', appliesTo: 'BOTH', displayOrder: 1 },
        { title: 'Do Not Take Insulin Before the Test', description: 'If you are on insulin therapy, consult your doctor before the test. Do not administer insulin on the morning of the test unless directed by your physician.', appliesTo: 'BOTH', displayOrder: 2 },
        { title: 'Avoid Oral Diabetes Medication', description: 'Drugs like metformin and sulfonylureas can affect fasting insulin levels. Consult your doctor before deciding whether to skip your morning dose.', appliesTo: 'BOTH', displayOrder: 3 },
        { title: 'Avoid Physical Stress', description: 'Avoid strenuous activity or emotional stress before the test, as both can influence insulin secretion.', appliesTo: 'BOTH', displayOrder: 4 },
        { title: 'Be Available During Fasting Window', description: 'Ensure you are at home and in a rested state during the phlebotomist\'s visit. Do not eat just before the collection.', appliesTo: 'HOME', displayOrder: 5 },
        { title: 'Arrive at the Branch Early', description: 'Reach the branch before 9 AM for best results. Morning fasting samples are preferred for insulin testing.', appliesTo: 'LAB', displayOrder: 5 },
      ],
    },
    {
      testName: 'Thyroid Profile T3/T4/TSH',
      items: [
        { title: 'No Fasting Required', description: 'Thyroid hormones are not affected by food. You may eat and drink normally before the test.', appliesTo: 'BOTH', displayOrder: 1 },
        { title: 'Take Thyroid Medication After the Test', description: 'If you are on levothyroxine (Thyronorm, Eltroxin), take it after the blood draw for the most accurate TSH reading.', appliesTo: 'BOTH', displayOrder: 2 },
        { title: 'Avoid Biotin Supplements', description: 'Stop biotin (Vitamin B7) supplements 48 hours before the test. High-dose biotin interferes with thyroid hormone assays and can give false results.', appliesTo: 'BOTH', displayOrder: 3 },
        { title: 'Avoid Iodine-Rich Foods', description: 'Avoid excess iodine-rich foods like seaweed, iodine supplements, or contrast dyes used in imaging for 48 hours before the test.', appliesTo: 'BOTH', displayOrder: 4 },
        { title: 'Morning Testing Preferred', description: 'TSH levels are highest in the morning. Schedule your test before 10 AM for most consistent results.', appliesTo: 'BOTH', displayOrder: 5 },
      ],
    },
    {
      testName: 'Thyroid Free FT3/FT4/TSH',
      items: [
        { title: 'Take Thyroid Medication Post Sample', description: 'If you are on thyroid replacement therapy, take your medication after the blood sample is collected to get accurate free hormone levels.', appliesTo: 'BOTH', displayOrder: 1 },
        { title: 'Stop Biotin for 48 Hours', description: 'Biotin supplementation (especially doses above 5 mg/day) significantly interferes with free T3 and T4 immunoassays. Stop 48 hours prior.', appliesTo: 'BOTH', displayOrder: 2 },
        { title: 'No Fasting Needed', description: 'You may eat and drink normally. Free thyroid hormones are not influenced by food intake.', appliesTo: 'BOTH', displayOrder: 3 },
        { title: 'Morning Sample Preferred', description: 'FT3/FT4/TSH follow a diurnal pattern. Morning samples before 10 AM provide the most reproducible and comparable results.', appliesTo: 'BOTH', displayOrder: 4 },
      ],
    },
    {
      testName: 'TSH Ultra Sensitive',
      items: [
        { title: 'No Fasting Required', description: 'TSH Ultra Sensitive does not require fasting. Eat and drink as normal before the test.', appliesTo: 'BOTH', displayOrder: 1 },
        { title: 'Take Thyroid Medication After Blood Draw', description: 'If you are on thyroid medications, delay your dose until after the sample is collected to ensure accurate results.', appliesTo: 'BOTH', displayOrder: 2 },
        { title: 'Stop Biotin Supplements', description: 'Discontinue biotin supplementation at least 48 hours before the test to prevent interference with the assay.', appliesTo: 'BOTH', displayOrder: 3 },
        { title: 'Morning Collection Recommended', description: 'Schedule the test in the morning. TSH values vary throughout the day, and morning values are considered the reference standard.', appliesTo: 'BOTH', displayOrder: 4 },
      ],
    },
    {
      testName: 'Anti TPO Antibody',
      items: [
        { title: 'No Fasting Required', description: 'Anti-TPO antibody levels are not affected by food. You may eat normally before the test.', appliesTo: 'BOTH', displayOrder: 1 },
        { title: 'Stop Biotin for 48 Hours', description: 'Biotin supplements can cause false-low or false-high Anti-TPO results depending on the assay used. Stop biotin at least 48 hours before testing.', appliesTo: 'BOTH', displayOrder: 2 },
        { title: 'Inform About Immunosuppressants', description: 'Drugs like steroids, methotrexate, or biologics can suppress antibody production. Inform your doctor and the lab about these medications before testing.', appliesTo: 'BOTH', displayOrder: 3 },
        { title: 'Avoid Iodine Contrast Media', description: 'If you have had an iodine-based imaging scan (like CT with contrast) in the last 7 days, inform the lab. It can temporarily affect thyroid antibody measurements.', appliesTo: 'BOTH', displayOrder: 4 },
      ],
    },
    {
      testName: 'Lipid Profile (7 param)',
      items: [
        { title: 'Fast for 10–12 Hours', description: 'A strict fast of 10 to 12 hours is required before a lipid profile. Only plain water is permitted during the fasting window.', appliesTo: 'BOTH', displayOrder: 1 },
        { title: 'Avoid Alcohol for 48 Hours', description: 'Do not consume alcohol for at least 48 hours before the test. Alcohol can significantly raise triglyceride levels and distort the lipid panel.', appliesTo: 'BOTH', displayOrder: 2 },
        { title: 'Avoid High-Fat Meals the Previous Day', description: 'Avoid oily, fried, or fatty foods on the day before the test, as residual dietary fat can affect LDL and triglyceride readings even after fasting.', appliesTo: 'BOTH', displayOrder: 3 },
        { title: 'Do Not Exercise on Test Day', description: 'Avoid exercise on the morning of the test. Physical activity can transiently alter cholesterol and HDL levels.', appliesTo: 'BOTH', displayOrder: 4 },
        { title: 'Disclose Lipid-Lowering Medications', description: 'If you are on statins, fibrates, or niacin, inform the phlebotomist. These medications affect lipid levels and should be documented alongside results.', appliesTo: 'BOTH', displayOrder: 5 },
        { title: 'Morning Home Visit Preferred', description: 'Schedule your home collection in the early morning after overnight fasting. Ensure you have not eaten since the previous night.', appliesTo: 'HOME', displayOrder: 6 },
        { title: 'Arrive After Overnight Fast', description: 'Visit the branch before 10 AM after completing your overnight fast. Do not eat or drink anything (except water) on the way to the branch.', appliesTo: 'LAB', displayOrder: 6 },
      ],
    },
    {
      testName: 'Troponin I',
      items: [
        { title: 'No Fasting Required', description: 'Troponin I is an emergency cardiac marker. No fasting is required. If you have chest pain or cardiac symptoms, seek immediate attention.', appliesTo: 'BOTH', displayOrder: 1 },
        { title: 'Mention Recent Chest Pain', description: 'Inform the phlebotomist and doctor about the onset of chest pain, shortness of breath, or cardiac symptoms. Timing is critical for Troponin interpretation.', appliesTo: 'BOTH', displayOrder: 2 },
        { title: 'Avoid Strenuous Exercise Before Test', description: 'Intense exercise (marathon, heavy lifting) can cause a mild rise in Troponin from muscle damage. Avoid this for 24 hours before the test if non-emergency.', appliesTo: 'BOTH', displayOrder: 3 },
        { title: 'Disclose Recent Surgeries', description: 'Any recent cardiac procedure, catheterization, or chest surgery should be disclosed as these can cause transient Troponin elevation.', appliesTo: 'BOTH', displayOrder: 4 },
        { title: 'Emergency Home Collection Available', description: 'For suspected cardiac events, our emergency home collection team can be dispatched. Call our helpline for priority dispatch.', appliesTo: 'HOME', displayOrder: 5 },
        { title: 'Proceed to the Lab Immediately', description: 'For chest pain or suspected heart attack, do not wait for a scheduled appointment. Proceed to the branch immediately or call emergency services.', appliesTo: 'LAB', displayOrder: 5 },
      ],
    },
    {
      testName: 'CRP (Cardiac Risk)',
      items: [
        { title: 'No Fasting Required', description: 'High-sensitivity CRP levels are not affected by food. You may eat and drink normally before the test.', appliesTo: 'BOTH', displayOrder: 1 },
        { title: 'Avoid Anti-Inflammatory Drugs', description: 'NSAIDs (ibuprofen, aspirin), corticosteroids, and statins can suppress CRP levels. Consult your doctor before stopping any medication.', appliesTo: 'BOTH', displayOrder: 2 },
        { title: 'Test During Stable Health Conditions', description: 'CRP rises dramatically with any infection or injury. Avoid the test during a fever, cold, or injury. Wait at least 2 weeks after recovery for accurate cardiac risk assessment.', appliesTo: 'BOTH', displayOrder: 3 },
        { title: 'Inform About Recent Vaccinations', description: 'Vaccinations can temporarily raise CRP. Inform the lab if you have been vaccinated in the last 1 week.', appliesTo: 'BOTH', displayOrder: 4 },
      ],
    },
    {
      testName: 'Liver Function Test (LFT)',
      items: [
        { title: 'Fast for 8–10 Hours', description: 'While LFT does not strictly require fasting, an 8–10 hour fast is recommended for the most accurate bilirubin and enzyme readings.', appliesTo: 'BOTH', displayOrder: 1 },
        { title: 'Avoid Alcohol for 48 Hours', description: 'Alcohol is directly metabolized by the liver and can significantly elevate ALT, AST, and GGT levels. Abstain completely for at least 48 hours before the test.', appliesTo: 'BOTH', displayOrder: 2 },
        { title: 'Avoid Hepatotoxic Medications', description: 'Drugs such as paracetamol, certain antibiotics, and statins can raise liver enzymes. Inform your doctor if you are on any regular medication.', appliesTo: 'BOTH', displayOrder: 3 },
        { title: 'Avoid Intense Exercise', description: 'Strenuous activity can raise AST and ALT (which are also present in muscles). Avoid intense exercise 24 hours before the test.', appliesTo: 'BOTH', displayOrder: 4 },
        { title: 'Inform About Supplements and Herbal Medicines', description: 'Many herbal supplements (kava, green tea extract, comfrey) are hepatotoxic and can distort LFT results. Disclose all supplements.', appliesTo: 'BOTH', displayOrder: 5 },
      ],
    },
    {
      testName: 'Bilirubin Total/Direct',
      items: [
        { title: 'Fast for 4 Hours Minimum', description: 'A minimum 4-hour fast is recommended before bilirubin testing. Fatty meals can cause lipemia, which interferes with bilirubin measurement.', appliesTo: 'BOTH', displayOrder: 1 },
        { title: 'Avoid Exposure to Direct Sunlight', description: 'Bilirubin is photo-sensitive. After blood collection, the sample should be protected from light. Inform the phlebotomist if collection is outdoors.', appliesTo: 'BOTH', displayOrder: 2 },
        { title: 'Avoid Alcohol', description: 'Do not consume alcohol for 24 hours before the test. Alcohol interferes with bilirubin metabolism in the liver.', appliesTo: 'BOTH', displayOrder: 3 },
        { title: 'Disclose Medications', description: 'Several drugs including rifampicin, phenobarbital, and hormonal contraceptives affect bilirubin levels. Disclose all current medications.', appliesTo: 'BOTH', displayOrder: 4 },
      ],
    },
    {
      testName: 'SGPT (ALT)',
      items: [
        { title: 'Avoid Alcohol for 24 Hours', description: 'Alcohol is directly processed by the liver and can cause temporary ALT elevation. Abstain from alcohol for at least 24 hours before the test.', appliesTo: 'BOTH', displayOrder: 1 },
        { title: 'Avoid Heavy Exercise', description: 'ALT is present in muscle tissue. Heavy exercise can cause transient rises in ALT unrelated to liver disease. Avoid strenuous workouts for 24 hours.', appliesTo: 'BOTH', displayOrder: 2 },
        { title: 'Disclose All Medications', description: 'Paracetamol, statins, antibiotics (especially amoxicillin-clavulanate), and herbal medicines can all elevate ALT. Provide a complete medication list to the lab.', appliesTo: 'BOTH', displayOrder: 3 },
        { title: 'No Fasting Strictly Required', description: 'SGPT (ALT) does not require strict fasting, but a 4-hour fast is preferred for consistent, accurate results.', appliesTo: 'BOTH', displayOrder: 4 },
      ],
    },
    {
      testName: 'Hepatitis B Surface Antigen',
      items: [
        { title: 'No Fasting Required', description: 'Hepatitis B Surface Antigen testing requires no fasting. You may eat and drink normally before the test.', appliesTo: 'BOTH', displayOrder: 1 },
        { title: 'Disclose Vaccination History', description: 'Inform the lab if you have received the Hepatitis B vaccine recently. Vaccination does not cause a positive HBsAg result but should be documented.', appliesTo: 'BOTH', displayOrder: 2 },
        { title: 'Disclose Immunosuppressive Therapy', description: 'Patients on immunosuppressive drugs or undergoing chemotherapy may have altered HBsAg expression. Inform your doctor and the lab.', appliesTo: 'BOTH', displayOrder: 3 },
        { title: 'Avoid Sharing Needles and Personal Items', description: 'If you suspect Hepatitis B exposure, avoid sharing personal items and needles to prevent transmission while awaiting results.', appliesTo: 'BOTH', displayOrder: 4 },
        { title: 'No Special Preparation at Branch', description: 'Simply walk in, provide a small blood sample, and your result will be available within 24 hours. No prior appointment required for this test.', appliesTo: 'LAB', displayOrder: 5 },
      ],
    },
    {
      testName: 'Vitamin D Total (25-OH)',
      items: [
        { title: 'No Fasting Required', description: 'Vitamin D levels are not affected by recent food intake. You may eat and drink normally before the test.', appliesTo: 'BOTH', displayOrder: 1 },
        { title: 'Stop Vitamin D Supplements for 48 Hours', description: 'If you are taking Vitamin D supplements, stop them 48 hours before the test unless your doctor has instructed otherwise. This prevents artificially elevated results.', appliesTo: 'BOTH', displayOrder: 2 },
        { title: 'Disclose Calcium and Magnesium Supplements', description: 'Calcium and magnesium interact with Vitamin D metabolism. Disclose these to the lab for accurate interpretation.', appliesTo: 'BOTH', displayOrder: 3 },
        { title: 'Inform About Liver or Kidney Disease', description: 'Vitamin D is converted to its active form in the liver and kidneys. If you have liver or kidney disease, inform the lab as this affects result interpretation.', appliesTo: 'BOTH', displayOrder: 4 },
        { title: 'Avoid Sun Exposure Before Test', description: 'Do not spend prolonged time in direct sunlight on the day of the test before sample collection, as this can transiently affect circulating Vitamin D.', appliesTo: 'HOME', displayOrder: 5 },
      ],
    },
    {
      testName: 'Vitamin B12 (Cobalamin)',
      items: [
        { title: 'Fast for 6–8 Hours', description: 'A 6 to 8 hour fast is recommended before Vitamin B12 testing. Recent dietary B12 (from meat or dairy) can transiently raise circulating levels.', appliesTo: 'BOTH', displayOrder: 1 },
        { title: 'Stop B12 Supplements for 48 Hours', description: 'Stop taking Vitamin B12 or B-complex supplements at least 48 hours before the test to avoid falsely elevated readings.', appliesTo: 'BOTH', displayOrder: 2 },
        { title: 'Stop B12 Injections 7 Days Prior', description: 'If you are on cyanocobalamin or methylcobalamin injections, avoid them for at least 7 days before the test unless directed by your doctor.', appliesTo: 'BOTH', displayOrder: 3 },
        { title: 'Disclose Metformin Use', description: 'Metformin (used for diabetes) is known to reduce B12 absorption over time. Inform the lab if you are on metformin therapy for correct result interpretation.', appliesTo: 'BOTH', displayOrder: 4 },
        { title: 'Inform About Gastrointestinal Conditions', description: 'Conditions like Crohn\'s disease, celiac disease, and pernicious anemia affect B12 absorption. Disclose any GI disorders to the lab.', appliesTo: 'BOTH', displayOrder: 5 },
      ],
    },
    {
      testName: 'Iron Profile',
      items: [
        { title: 'Fast for 8–12 Hours', description: 'Serum iron fluctuates significantly after meals. A fast of 8–12 hours (preferably overnight) is required for accurate iron profile results.', appliesTo: 'BOTH', displayOrder: 1 },
        { title: 'Stop Iron Supplements for 24 Hours', description: 'Do not take iron tablets, syrups, or multivitamins containing iron for at least 24 hours before the test. Iron supplementation causes falsely elevated serum iron.', appliesTo: 'BOTH', displayOrder: 2 },
        { title: 'Morning Testing Recommended', description: 'Serum iron is highest in the morning. Schedule the test before 10 AM after overnight fasting for the most reproducible results.', appliesTo: 'BOTH', displayOrder: 3 },
        { title: 'Disclose Recent Blood Transfusions', description: 'Blood transfusions temporarily raise serum iron and ferritin. Inform the lab if you have had a transfusion in the past 3 months.', appliesTo: 'BOTH', displayOrder: 4 },
        { title: 'Do Not Exercise on Test Morning', description: 'Physical exercise can affect ferritin and TIBC levels. Avoid exercise on the morning of the test.', appliesTo: 'BOTH', displayOrder: 5 },
      ],
    },
    {
      testName: 'Calcium Test',
      items: [
        { title: 'No Strict Fasting Required', description: 'Total calcium levels are not significantly affected by food. However, a 4-hour fast before the test is preferred for consistent results.', appliesTo: 'BOTH', displayOrder: 1 },
        { title: 'Stop Calcium Supplements for 24 Hours', description: 'Do not take calcium tablets or antacids containing calcium for 24 hours before the test to avoid artificially elevated calcium readings.', appliesTo: 'BOTH', displayOrder: 2 },
        { title: 'Disclose Vitamin D Supplements', description: 'Vitamin D enhances calcium absorption and can indirectly raise serum calcium. Disclose any ongoing Vitamin D supplementation.', appliesTo: 'BOTH', displayOrder: 3 },
        { title: 'Inform About Diuretics and Steroids', description: 'Thiazide diuretics raise calcium levels while loop diuretics lower them. Corticosteroids can also affect calcium. Disclose all medications.', appliesTo: 'BOTH', displayOrder: 4 },
        { title: 'Stay Well-Hydrated', description: 'Dehydration can concentrate serum calcium and produce falsely elevated readings. Drink water before the test.', appliesTo: 'BOTH', displayOrder: 5 },
      ],
    },
    {
      testName: 'Dengue Duo NS1+IgG+IgM',
      items: [
        { title: 'No Fasting Required', description: 'Dengue testing requires no fasting. You may eat and drink normally. This test is typically done when dengue fever is suspected.', appliesTo: 'BOTH', displayOrder: 1 },
        { title: 'Test Within the First 5 Days of Fever', description: 'NS1 antigen is most reliably detected in the first 1–5 days of fever onset. If fever has been present for more than 5 days, IgM becomes the primary marker.', appliesTo: 'BOTH', displayOrder: 2 },
        { title: 'Note the Day of Fever Onset', description: 'Inform the phlebotomist of the exact date when your fever started. This helps in selecting the most appropriate test marker for interpretation.', appliesTo: 'BOTH', displayOrder: 3 },
        { title: 'Disclose Prior Dengue Infections', description: 'A previous dengue infection raises baseline IgG levels. Inform the lab to avoid misinterpretation of the IgG result.', appliesTo: 'BOTH', displayOrder: 4 },
        { title: 'Rest Before Home Collection', description: 'Dengue patients often feel very weak. Rest at home and inform us of your comfort and access needs when scheduling.', appliesTo: 'HOME', displayOrder: 5 },
        { title: 'Bring Fever History to Branch', description: 'Carry a note with your fever start date, temperature readings, and any medications taken (especially paracetamol). This aids in clinical interpretation.', appliesTo: 'LAB', displayOrder: 5 },
      ],
    },
    {
      testName: 'Typhoid Rapid Test',
      items: [
        { title: 'No Fasting Required', description: 'Typhoid rapid antigen testing does not require any fasting. The test can be performed at any time of day.', appliesTo: 'BOTH', displayOrder: 1 },
        { title: 'Test Early in the Illness', description: 'The typhoid rapid test is most accurate in the first 1–2 weeks of illness. Antigen levels decline after antibiotic treatment begins.', appliesTo: 'BOTH', displayOrder: 2 },
        { title: 'Disclose Antibiotic Use', description: 'If you have already started antibiotics (cefixime, azithromycin, ciprofloxacin), inform the lab. Antibiotics can reduce antigen detectability and cause false-negative results.', appliesTo: 'BOTH', displayOrder: 3 },
        { title: 'Note Associated Symptoms', description: 'Mention accompanying symptoms such as constipation, rash, or abdominal discomfort. These help differentiate typhoid from other febrile illnesses.', appliesTo: 'BOTH', displayOrder: 4 },
      ],
    },
    {
      testName: 'Malaria PF/PV Rapid',
      items: [
        { title: 'No Fasting Required', description: 'Malaria rapid diagnostic tests require no fasting. Blood can be collected at any time regardless of food intake.', appliesTo: 'BOTH', displayOrder: 1 },
        { title: 'Test During Active Fever Episode', description: 'For best sensitivity, collect the blood sample during or just after a fever spike, when parasitemia is at its highest.', appliesTo: 'BOTH', displayOrder: 2 },
        { title: 'Inform About Anti-Malarial Drug Use', description: 'If you have taken anti-malarial drugs (chloroquine, artemisinin, primaquine) before the test, inform the lab. These can suppress parasite levels and affect rapid test sensitivity.', appliesTo: 'BOTH', displayOrder: 3 },
        { title: 'Mention Travel History', description: 'Inform the phlebotomist of any recent travel to malaria-endemic zones (Rajasthan, Odisha, Chhattisgarh, Northeast India, Africa). This is critical for risk stratification.', appliesTo: 'BOTH', displayOrder: 4 },
        { title: 'Immediate Home Collection for High Fever', description: 'If you have a fever above 102°F with chills and rigors, our phlebotomist can visit on priority. Call our helpline for urgent scheduling.', appliesTo: 'HOME', displayOrder: 5 },
      ],
    },
    {
      testName: 'CRP Quantitative',
      items: [
        { title: 'No Fasting Required', description: 'CRP quantitative levels are not affected by food intake. You may eat and drink normally before the test.', appliesTo: 'BOTH', displayOrder: 1 },
        { title: 'Avoid Anti-Inflammatory Medications', description: 'NSAIDs and corticosteroids suppress CRP. Avoid these medications before the test unless medically essential, and disclose them to the lab.', appliesTo: 'BOTH', displayOrder: 2 },
        { title: 'Do Not Test During Active Infection', description: 'If you have an active cold, flu, or any recent infection or injury, CRP will be non-specifically elevated. Test after full recovery for accurate baseline infection monitoring.', appliesTo: 'BOTH', displayOrder: 3 },
        { title: 'Inform About Recent Surgery or Trauma', description: 'Surgery, burns, or trauma cause significant CRP elevation for days to weeks. Disclose any recent procedures or injuries to the lab.', appliesTo: 'BOTH', displayOrder: 4 },
      ],
    },
    {
      testName: 'COVID-19 RT PCR',
      items: [
        { title: 'No Fasting Required', description: 'COVID-19 RT-PCR requires no fasting. You may eat and drink normally. The test is done via a nasopharyngeal or oropharyngeal swab.', appliesTo: 'BOTH', displayOrder: 1 },
        { title: 'Do Not Eat, Drink, or Brush Teeth 30 Minutes Before', description: 'Avoid eating, drinking (including water), brushing your teeth, or using nasal sprays for 30 minutes before the swab collection to prevent sample dilution.', appliesTo: 'BOTH', displayOrder: 2 },
        { title: 'Wear a Mask Until Sample Collection', description: 'Wear your mask until the swab is about to be collected. Remove it only when directed by the phlebotomist and replace it immediately after.', appliesTo: 'BOTH', displayOrder: 3 },
        { title: 'Isolate if Symptomatic', description: 'If you have symptoms (fever, cough, breathing difficulty, loss of smell or taste), isolate yourself from family members before and during the sample collection visit.', appliesTo: 'BOTH', displayOrder: 4 },
        { title: 'Ensure Proper Ventilation at Home', description: 'Open windows and doors before the phlebotomist arrives. Keep other family members in a separate room during sample collection to minimize exposure.', appliesTo: 'HOME', displayOrder: 5 },
        { title: 'Maintain Distance at the Branch', description: 'Maintain at least 6 feet distance from others at the branch. Use the dedicated swab collection area provided by the branch for COVID-19 samples.', appliesTo: 'LAB', displayOrder: 5 },
      ],
    },
  ];

  const faqData: {
    testName: string;
    items: { question: string; answer: string; displayOrder: number }[];
  }[] = [
    {
      testName: 'Complete Blood Count (CBC)',
      items: [
        { question: 'What does a CBC test measure?', answer: 'A CBC measures red blood cells (RBC), white blood cells (WBC), hemoglobin, hematocrit, platelets, and the differential count of WBC types. Together, these 24 parameters provide a comprehensive view of your blood health.', displayOrder: 1 },
        { question: 'Do I need to fast before a CBC test?', answer: 'No. CBC does not require fasting. You can eat and drink normally before the test.', displayOrder: 2 },
        { question: 'What conditions can a CBC detect?', answer: 'CBC can help detect anemia, infection, leukemia, lymphoma, bone marrow disorders, immune deficiencies, and clotting problems among others.', displayOrder: 3 },
        { question: 'What does low hemoglobin mean?', answer: 'Low hemoglobin (below normal range for your age and sex) indicates anemia. The cause may be iron deficiency, Vitamin B12 deficiency, chronic disease, or blood loss. Your doctor will recommend further tests based on the value.', displayOrder: 4 },
        { question: 'Can medications affect CBC results?', answer: 'Yes. Blood thinners (warfarin, heparin), antibiotics, chemotherapy drugs, and corticosteroids can all affect CBC values. Always disclose your medications before the test.', displayOrder: 5 },
        { question: 'How long does a CBC report take?', answer: 'CBC reports are typically available within 12 hours of sample collection. You will receive a notification on the app once your report is ready.', displayOrder: 6 },
      ],
    },
    {
      testName: 'ESR (Westergren Method)',
      items: [
        { question: 'What is ESR and why is it done?', answer: 'ESR (Erythrocyte Sedimentation Rate) measures how quickly red blood cells fall to the bottom of a test tube. It is a non-specific inflammation marker used to detect and monitor inflammatory and autoimmune conditions.', displayOrder: 1 },
        { question: 'What is a normal ESR value?', answer: 'Normal ESR values differ by age and sex. For adult men: 0–15 mm/hr; for adult women: 0–20 mm/hr. These ranges may vary slightly by laboratory. Always refer to the reference range on your report.', displayOrder: 2 },
        { question: 'What causes a high ESR?', answer: 'A high ESR can be caused by infections (tuberculosis, pneumonia), autoimmune diseases (rheumatoid arthritis, lupus), inflammatory bowel disease, cancer, anemia, kidney disease, or pregnancy. It is not diagnostic on its own.', displayOrder: 3 },
        { question: 'Can ESR be normal even with disease?', answer: 'Yes. Some serious inflammatory conditions may have a normal ESR, especially early in the illness. ESR should always be interpreted alongside CRP, clinical symptoms, and other investigations.', displayOrder: 4 },
        { question: 'Does ESR differ by age?', answer: 'Yes. ESR naturally increases with age. Older adults typically have higher ESR values than younger individuals, even without disease. Reference ranges are adjusted accordingly.', displayOrder: 5 },
      ],
    },
    {
      testName: 'Urine Routine & Microscopy',
      items: [
        { question: 'What does a urine routine test check?', answer: 'A urine routine and microscopy test evaluates physical characteristics (color, clarity), chemical properties (pH, protein, glucose, ketones, bilirubin), and microscopic elements (cells, casts, crystals, bacteria) across 19 parameters.', displayOrder: 1 },
        { question: 'Why is the first morning urine preferred?', answer: 'First morning urine is the most concentrated specimen of the day, making it ideal for detecting proteins, cells, and casts that might be too dilute to detect in random samples.', displayOrder: 2 },
        { question: 'What does protein in urine mean?', answer: 'Protein in urine (proteinuria) can indicate kidney disease, urinary tract infection, diabetes, or hypertension. Trace amounts can sometimes appear after heavy exercise. Your doctor will advise further testing if significant proteinuria is detected.', displayOrder: 3 },
        { question: 'Can I get a UTI diagnosed from this test?', answer: 'Yes. Urine routine microscopy can detect pus cells (WBCs), bacteria, and nitrites which indicate a urinary tract infection. However, a urine culture is needed to identify the specific bacteria and choose the correct antibiotic.', displayOrder: 4 },
        { question: 'Why should women avoid the test during menstruation?', answer: 'Menstrual blood can contaminate the urine sample, leading to falsely positive results for red blood cells and protein, which can be misinterpreted as kidney disease or UTI.', displayOrder: 5 },
      ],
    },
    {
      testName: 'Peripheral Smear Examination',
      items: [
        { question: 'What is a peripheral blood smear?', answer: 'A peripheral smear is a microscopic examination of a thin layer of blood spread on a glass slide. It allows the pathologist to visually examine the shape, size, and characteristics of red blood cells, white blood cells, and platelets.', displayOrder: 1 },
        { question: 'What conditions can a peripheral smear diagnose?', answer: 'It can diagnose anemia types (iron deficiency, megaloblastic, hemolytic, sickle cell), blood infections (malaria, babesiosis), leukemia, lymphoma, thrombocytopenia, and other blood cell abnormalities.', displayOrder: 2 },
        { question: 'How is a peripheral smear different from CBC?', answer: 'While CBC provides quantitative counts, a peripheral smear provides qualitative information about cell morphology (shape and appearance). Both together give a complete picture of blood health.', displayOrder: 3 },
        { question: 'Is a peripheral smear the same as a malaria test?', answer: 'No. While a peripheral smear can detect malaria parasites within red blood cells, it is not the same as a rapid malaria test. Peripheral smear requires expert microscopic review by a trained pathologist and takes longer.', displayOrder: 4 },
        { question: 'When is a peripheral smear test usually ordered?', answer: 'It is ordered when CBC results are abnormal, when a blood infection is suspected, or when the doctor needs more information about the shape and maturity of blood cells beyond what automated machines provide.', displayOrder: 5 },
      ],
    },
    {
      testName: 'Blood Group & Rh Typing',
      items: [
        { question: 'What does blood group testing tell you?', answer: 'Blood group typing determines your ABO blood type (A, B, AB, or O) and your Rh factor (positive or negative). This information is essential for safe blood transfusions, organ transplants, and pregnancy management.', displayOrder: 1 },
        { question: 'Why is Rh factor important during pregnancy?', answer: 'If an Rh-negative mother carries an Rh-positive baby, her immune system may produce antibodies against the baby\'s blood (Rh incompatibility), which can cause hemolytic disease of the newborn. Anti-D immunoglobulin is given to prevent this.', displayOrder: 2 },
        { question: 'Can blood group change over time?', answer: 'No. Your ABO and Rh blood group is determined by genetics and remains constant throughout your life. A recent blood transfusion may temporarily show mixed cell types but does not change your actual blood group.', displayOrder: 3 },
        { question: 'How long does blood group typing take?', answer: 'Blood group and Rh typing results are typically available within 12 hours of sample collection. It is one of the most straightforward blood tests.', displayOrder: 4 },
        { question: 'Do I need to repeat blood group testing?', answer: 'Once reliably determined, blood group testing does not need to be repeated unless there is a clinical reason such as a bone marrow transplant, which can alter blood group in rare cases.', displayOrder: 5 },
      ],
    },
    {
      testName: 'Blood Sugar Fasting',
      items: [
        { question: 'What is the normal range for fasting blood sugar?', answer: 'A fasting blood glucose of 70–99 mg/dL is considered normal. Values between 100–125 mg/dL indicate prediabetes, and 126 mg/dL or above on two separate occasions confirms diabetes.', displayOrder: 1 },
        { question: 'Why must I fast before a blood sugar test?', answer: 'Food raises blood sugar levels after eating. Fasting ensures that the result reflects only your body\'s baseline glucose production, giving an accurate assessment of how your body regulates sugar without dietary influence.', displayOrder: 2 },
        { question: 'Can I drink water during the fasting period?', answer: 'Yes. Plain water is permitted and encouraged during the fasting period. Do not add sugar, lemon, or anything else to the water.', displayOrder: 3 },
        { question: 'Should I take my diabetes medication before the test?', answer: 'This depends on your medication type. For insulin-dependent patients, consult your doctor before the test. Generally, glucose-lowering medications are taken after the sample is collected to avoid artificially low readings.', displayOrder: 4 },
        { question: 'Can stress or illness affect fasting blood sugar?', answer: 'Yes. Acute illness, fever, or significant emotional stress raises cortisol and other hormones that elevate blood glucose even in non-diabetic individuals. Inform your doctor if you are unwell at the time of testing.', displayOrder: 5 },
      ],
    },
    {
      testName: 'HbA1c – 3-Month Average',
      items: [
        { question: 'What is HbA1c and what does it measure?', answer: 'HbA1c (glycated hemoglobin) measures the percentage of hemoglobin molecules that have glucose attached. Since red blood cells live for about 90 days, HbA1c reflects the average blood sugar level over the past 2–3 months.', displayOrder: 1 },
        { question: 'What are normal HbA1c ranges?', answer: 'Below 5.7% is normal, 5.7–6.4% indicates prediabetes, and 6.5% or above on two separate tests confirms diabetes. For people already diagnosed with diabetes, the target is usually below 7%.', displayOrder: 2 },
        { question: 'Why is HbA1c better than fasting glucose for monitoring diabetes?', answer: 'Fasting glucose gives a single-point snapshot which can vary day to day. HbA1c gives a long-term average that is not affected by daily fluctuations, meals, stress, or whether you happened to eat less that morning.', displayOrder: 3 },
        { question: 'Can anemia affect HbA1c results?', answer: 'Yes. Iron deficiency anemia, vitamin B12 deficiency anemia, and hemolytic anemias can falsely lower or raise HbA1c values. If you have anemia, inform your doctor for proper interpretation.', displayOrder: 4 },
        { question: 'How often should HbA1c be tested?', answer: 'For diabetic patients, HbA1c should be tested every 3 months if blood sugar is poorly controlled, and every 6 months if it is stable and well-managed. For screening, once a year is typically sufficient.', displayOrder: 5 },
      ],
    },
    {
      testName: 'Blood Sugar PP',
      items: [
        { question: 'What does post-prandial blood sugar test measure?', answer: 'PP blood sugar (PPBS) measures blood glucose exactly 2 hours after the start of a meal. It reflects how efficiently your body uses insulin to clear the glucose load from a meal.', displayOrder: 1 },
        { question: 'What is the normal range for PP blood sugar?', answer: 'A post-meal blood glucose below 140 mg/dL is normal, 140–199 mg/dL indicates impaired glucose tolerance (prediabetes), and 200 mg/dL or above indicates diabetes.', displayOrder: 2 },
        { question: 'Why is PP blood sugar important?', answer: 'Post-meal glucose spikes are an early indicator of insulin resistance and can remain elevated even when fasting glucose is normal. Elevated PPBS is also a significant cardiovascular risk factor.', displayOrder: 3 },
        { question: 'Can I eat anything for the PP test meal?', answer: 'You should eat your typical normal meal — not an unusually large or small one. The idea is to mimic your everyday eating pattern so the result reflects your real-world glucose response.', displayOrder: 4 },
        { question: 'How is PP blood sugar different from fasting blood sugar?', answer: 'Fasting glucose reflects baseline glucose production by the liver. PP glucose reflects how well your body responds to dietary glucose. Both tests together provide a complete picture of glucose metabolism.', displayOrder: 5 },
      ],
    },
    {
      testName: 'Insulin Fasting',
      items: [
        { question: 'Why is fasting insulin tested?', answer: 'Fasting insulin measures how much insulin your pancreas is producing when you have not eaten. High fasting insulin despite normal blood sugar indicates insulin resistance, a key risk factor for type 2 diabetes and metabolic syndrome.', displayOrder: 1 },
        { question: 'What is the normal range for fasting insulin?', answer: 'Normal fasting insulin is generally between 2–25 mIU/L, though this varies by laboratory. Values above this range suggest hyperinsulinemia and insulin resistance. Your doctor will interpret results in clinical context.', displayOrder: 2 },
        { question: 'What is HOMA-IR and how is it calculated?', answer: 'HOMA-IR (Homeostatic Model Assessment of Insulin Resistance) is calculated using fasting insulin and fasting glucose: HOMA-IR = (Fasting Insulin × Fasting Glucose) / 405. A value above 2.5–3 suggests significant insulin resistance.', displayOrder: 3 },
        { question: 'Can insulin resistance be reversed?', answer: 'Yes. Insulin resistance can often be significantly improved or reversed through dietary changes, regular physical activity, weight loss, and in some cases, medications like metformin. Early detection is key.', displayOrder: 4 },
        { question: 'Why should I avoid insulin before the test?', answer: 'Injecting insulin before the test will suppress your natural insulin production response and produce artificially low fasting insulin readings, making the test meaningless for assessing insulin resistance.', displayOrder: 5 },
      ],
    },
    {
      testName: 'Thyroid Profile T3/T4/TSH',
      items: [
        { question: 'What is the difference between T3, T4, and TSH?', answer: 'TSH (Thyroid Stimulating Hormone) is produced by the pituitary gland and signals the thyroid to produce hormones. T4 (thyroxine) is the main hormone produced by the thyroid. T3 (triiodothyronine) is the active form, mostly converted from T4 in tissues.', displayOrder: 1 },
        { question: 'What does high TSH mean?', answer: 'High TSH means your pituitary is working harder to stimulate an underactive thyroid. This indicates hypothyroidism (low thyroid function). Symptoms include fatigue, weight gain, cold intolerance, and constipation.', displayOrder: 2 },
        { question: 'What does low TSH mean?', answer: 'Low TSH means the pituitary is suppressing stimulation because the thyroid is overactive. This indicates hyperthyroidism. Symptoms include weight loss, rapid heartbeat, anxiety, and heat intolerance.', displayOrder: 3 },
        { question: 'Does thyroid function testing require fasting?', answer: 'No. Thyroid hormones are not meaningfully affected by food. You can eat and drink normally. However, avoid biotin supplements for 48 hours and take thyroid medications after the blood draw.', displayOrder: 4 },
        { question: 'How often should I get my thyroid checked?', answer: 'For diagnosed thyroid disorders on medication, thyroid function should be checked every 6–12 weeks when adjusting medication, and every 6–12 months when stable. For general screening, once a year or when symptoms appear is typical.', displayOrder: 5 },
      ],
    },
    {
      testName: 'Thyroid Free FT3/FT4/TSH',
      items: [
        { question: 'Why are free hormones (FT3/FT4) tested instead of total T3/T4?', answer: 'Most thyroid hormones in the blood are bound to proteins and biologically inactive. Only the free (unbound) fractions (FT3 and FT4) are metabolically active. Free hormone levels are not affected by changes in binding proteins, making them more accurate.', displayOrder: 1 },
        { question: 'When is FT3/FT4 preferred over total T3/T4?', answer: 'FT3/FT4 is preferred for patients on medications that affect protein binding (like oral contraceptives, pregnancy, liver disease), those with thyroid antibodies, and for fine-tuning thyroid replacement therapy.', displayOrder: 2 },
        { question: 'What is a normal FT4 range?', answer: 'Normal FT4 ranges are approximately 0.8–1.8 ng/dL, but vary by lab and assay method. Always refer to the reference range on your report and have results interpreted by your doctor in clinical context.', displayOrder: 3 },
        { question: 'Can biotin really affect my thyroid test?', answer: 'Yes. High-dose biotin supplements (5 mg or more per day) are commonly used for hair and nail health and can interfere with immunoassay-based thyroid tests, causing false results. Stop biotin 48 hours before the test.', displayOrder: 4 },
        { question: 'Why does timing of thyroid medication matter for the test?', answer: 'Taking levothyroxine before the blood draw causes a transient spike in FT4, making levels appear falsely high. Taking it after collection gives a pre-dose trough level, which is the standard clinical reference for dose adjustment.', displayOrder: 5 },
      ],
    },
    {
      testName: 'TSH Ultra Sensitive',
      items: [
        { question: 'What makes TSH Ultra Sensitive different from regular TSH?', answer: 'TSH Ultra Sensitive uses a third-generation immunometric assay that can detect TSH values as low as 0.001–0.01 mIU/L. Regular TSH tests cannot reliably detect values this low, making ultra-sensitive TSH essential for diagnosing subclinical hyperthyroidism and monitoring thyroid cancer patients.', displayOrder: 1 },
        { question: 'When is TSH Ultra Sensitive ordered?', answer: 'It is specifically ordered for monitoring thyroid cancer patients on TSH-suppressive levothyroxine therapy, for diagnosing very mild (subclinical) hyperthyroidism, and for patients on amiodarone or other drugs that affect thyroid function.', displayOrder: 2 },
        { question: 'What is subclinical hyperthyroidism?', answer: 'Subclinical hyperthyroidism is when TSH is suppressed below normal but FT3/FT4 levels remain normal. Patients often have no symptoms but are at increased risk of atrial fibrillation and osteoporosis. Ultra-sensitive TSH is the primary tool to detect this.', displayOrder: 3 },
        { question: 'Can my TSH fluctuate without thyroid disease?', answer: 'Yes. TSH has a diurnal variation (highest at night and early morning, lowest in late afternoon). Acute illness, extreme caloric restriction, and certain medications (glucocorticoids, dopamine, metformin) can transiently suppress TSH even in healthy individuals.', displayOrder: 4 },
        { question: 'How often should TSH be checked during thyroid cancer follow-up?', answer: 'For differentiated thyroid cancer (papillary, follicular), TSH should be checked every 6–12 months in the first 5 years and annually thereafter, depending on risk stratification and treatment response. Your oncologist will guide the frequency.', displayOrder: 5 },
      ],
    },
    {
      testName: 'Anti TPO Antibody',
      items: [
        { question: 'What are Anti-TPO antibodies?', answer: 'Anti-TPO (Anti-Thyroid Peroxidase) antibodies are proteins produced by the immune system that mistakenly attack TPO, an enzyme essential for thyroid hormone production. Elevated levels indicate autoimmune thyroid disease.', displayOrder: 1 },
        { question: 'What conditions are associated with high Anti-TPO?', answer: 'High Anti-TPO levels are associated with Hashimoto\'s thyroiditis (the most common cause of hypothyroidism), Graves\' disease (the most common cause of hyperthyroidism), and postpartum thyroiditis. They are also mildly elevated in some non-thyroidal autoimmune conditions.', displayOrder: 2 },
        { question: 'Can someone have high Anti-TPO with normal TSH?', answer: 'Yes. High Anti-TPO with normal TSH and FT4 indicates thyroid autoimmunity without overt thyroid dysfunction. These individuals are at higher risk of developing hypothyroidism in the future and should be monitored annually.', displayOrder: 3 },
        { question: 'Can Anti-TPO levels decrease over time?', answer: 'Anti-TPO levels can fluctuate but rarely become undetectable once elevated. Treatment with levothyroxine or selenium supplementation may slightly reduce levels in Hashimoto\'s patients but does not eliminate the antibodies.', displayOrder: 4 },
        { question: 'Does Anti-TPO testing need to be repeated?', answer: 'Anti-TPO levels do not need to be checked frequently once the diagnosis of autoimmune thyroiditis is established. The diagnosis is confirmed by the presence of antibodies; the magnitude and trend have limited clinical management value beyond confirmation.', displayOrder: 5 },
      ],
    },
    {
      testName: 'Lipid Profile (7 param)',
      items: [
        { question: 'What parameters are included in a 7-parameter lipid profile?', answer: 'A 7-parameter lipid profile includes Total Cholesterol, HDL (good cholesterol), LDL (bad cholesterol), VLDL, Triglycerides, Non-HDL Cholesterol, and the Cardiac Risk Ratio (Total Cholesterol / HDL). Together these assess your cardiovascular risk comprehensively.', displayOrder: 1 },
        { question: 'What are ideal cholesterol values?', answer: 'Total cholesterol below 200 mg/dL, LDL below 100 mg/dL (below 70 mg/dL for high-risk patients), HDL above 60 mg/dL, and triglycerides below 150 mg/dL are considered optimal for cardiovascular health.', displayOrder: 2 },
        { question: 'Why do triglycerides require fasting?', answer: 'Triglycerides are directly absorbed from dietary fat and can spike dramatically within hours of eating. Without fasting, triglyceride values are unreliable and can falsely elevate the VLDL calculation, distorting the entire lipid panel.', displayOrder: 3 },
        { question: 'Does exercise affect cholesterol readings?', answer: 'Acute strenuous exercise on the day of the test can temporarily lower LDL and raise HDL. Avoid exercise on the morning of the test for the most stable, representative results.', displayOrder: 4 },
        { question: 'How often should I get a lipid profile done?', answer: 'Adults above 35 should get a lipid profile annually. Those on cholesterol-lowering medications should test every 3–6 months to monitor treatment efficacy. People with no risk factors can screen every 5 years from age 20.', displayOrder: 5 },
      ],
    },
    {
      testName: 'Troponin I',
      items: [
        { question: 'What does Troponin I measure?', answer: 'Troponin I is a cardiac-specific protein released into the bloodstream when heart muscle cells are damaged or dying. It is the most sensitive and specific biomarker for diagnosing myocardial infarction (heart attack) and other forms of cardiac injury.', displayOrder: 1 },
        { question: 'When does Troponin rise after a heart attack?', answer: 'Troponin I begins to rise 2–4 hours after cardiac injury, peaks at 12–48 hours, and remains elevated for 7–14 days. This prolonged elevation helps in diagnosing recent heart attacks even days after the event.', displayOrder: 2 },
        { question: 'Can Troponin be elevated without a heart attack?', answer: 'Yes. Troponin can be elevated in heart failure, myocarditis, pulmonary embolism, severe sepsis, renal failure, and after intense endurance exercise (rhabdomyolysis). Elevated Troponin always requires clinical evaluation, not just the test result.', displayOrder: 3 },
        { question: 'What is high-sensitivity Troponin?', answer: 'High-sensitivity Troponin assays can detect very small amounts of Troponin, allowing earlier detection of cardiac injury. This helps in ruling out heart attack rapidly (within 1–2 hours using serial measurements) versus traditional assays which take 3–6 hours.', displayOrder: 4 },
        { question: 'Can I have a heart attack with normal Troponin?', answer: 'A single normal Troponin drawn very early (within 2 hours of symptoms) does not rule out a heart attack. Serial Troponin measurements (at 0, 3, and 6 hours) are recommended to rule out acute MI. If you have chest pain, seek emergency evaluation.', displayOrder: 5 },
      ],
    },
    {
      testName: 'CRP (Cardiac Risk)',
      items: [
        { question: 'What is the difference between CRP and high-sensitivity CRP?', answer: 'Standard CRP detects gross inflammation (values above 10 mg/L) useful for diagnosing acute infections. High-sensitivity CRP (hsCRP) measures very low levels (below 3 mg/L) specifically used to assess chronic low-grade inflammation as a cardiovascular risk factor.', displayOrder: 1 },
        { question: 'What is the cardiac risk interpretation of CRP levels?', answer: 'hsCRP below 1 mg/L = low cardiovascular risk, 1–3 mg/L = moderate risk, above 3 mg/L = high risk. Values above 10 mg/L usually indicate acute inflammation unrelated to baseline cardiac risk and should be rechecked after the acute illness resolves.', displayOrder: 2 },
        { question: 'Does a high CRP mean I have heart disease?', answer: 'No. High CRP indicates elevated systemic inflammation, which is a risk factor for cardiovascular disease, but it is not diagnostic. It must be interpreted alongside lipid profile, blood pressure, blood glucose, and other cardiac risk factors.', displayOrder: 3 },
        { question: 'Can CRP be reduced?', answer: 'Yes. Regular aerobic exercise, weight loss, smoking cessation, a Mediterranean-style diet, and statin therapy are all associated with significant reductions in hsCRP. Treating underlying infections or autoimmune conditions also lowers CRP.', displayOrder: 4 },
        { question: 'How often should CRP be tested for cardiac risk?', answer: 'For adults with intermediate cardiovascular risk (10-year risk of 7.5–20%), hsCRP can be checked once as an additional risk stratification tool. Routine repeated testing without a specific clinical indication is not generally recommended.', displayOrder: 5 },
      ],
    },
    {
      testName: 'Liver Function Test (LFT)',
      items: [
        { question: 'What does an LFT panel measure?', answer: 'An LFT typically measures ALT (SGPT), AST (SGOT), ALP, GGT, Total and Direct Bilirubin, Total Protein, Albumin, and Globulin. Together these assess liver cell damage, bile duct function, synthetic function, and protein metabolism.', displayOrder: 1 },
        { question: 'What is a normal ALT (SGPT) level?', answer: 'Normal ALT is generally 7–56 IU/L for adults, though ranges vary by sex and laboratory. Women typically have slightly lower values than men. Values more than 3 times the upper limit of normal are considered significantly elevated and require further investigation.', displayOrder: 2 },
        { question: 'Can liver function tests be normal even with liver disease?', answer: 'Yes. In conditions like early cirrhosis or chronic hepatitis C, LFT values may be near-normal despite significant liver damage. LFTs reflect liver cell injury, not liver reserve. Additional tests like FibroScan or liver biopsy assess fibrosis.', displayOrder: 3 },
        { question: 'Why does alcohol cause high liver enzymes?', answer: 'Alcohol is directly metabolized in the liver and causes oxidative stress, inflammation, and hepatocyte damage. It specifically raises GGT (a sensitive alcohol marker) and ALT. Even moderate drinking can transiently elevate liver enzymes.', displayOrder: 4 },
        { question: 'How often should I get LFT done?', answer: 'For people on hepatotoxic medications (statins, methotrexate, antiepileptics), LFT should be done every 3–6 months. For general health screening in adults, annually or when symptoms like jaundice, fatigue, or abdominal discomfort appear is recommended.', displayOrder: 5 },
      ],
    },
    {
      testName: 'Bilirubin Total/Direct',
      items: [
        { question: 'What is bilirubin and where does it come from?', answer: 'Bilirubin is a yellow breakdown product of hemoglobin from old red blood cells. It is processed by the liver, secreted into bile, and excreted through the stool. Elevated bilirubin causes jaundice (yellowing of skin and eyes).', displayOrder: 1 },
        { question: 'What is the difference between total and direct bilirubin?', answer: 'Total bilirubin includes both indirect (unconjugated, not yet processed by the liver) and direct (conjugated, processed by the liver and ready for excretion) bilirubin. High indirect bilirubin suggests hemolysis or Gilbert\'s syndrome; high direct bilirubin suggests liver or bile duct disease.', displayOrder: 2 },
        { question: 'What is Gilbert\'s syndrome?', answer: 'Gilbert\'s syndrome is a benign genetic condition where indirect bilirubin is mildly elevated due to reduced liver conjugation enzyme activity. It is not a disease — it causes no liver damage and requires no treatment. Jaundice may worsen with fasting, stress, or illness.', displayOrder: 3 },
        { question: 'What causes high direct bilirubin?', answer: 'High direct bilirubin indicates a problem with bile flow (cholestasis). Causes include hepatitis, alcoholic liver disease, primary biliary cholangitis, bile duct stones, or pancreatic cancer obstructing the bile duct.', displayOrder: 4 },
        { question: 'Can medications cause jaundice?', answer: 'Yes. Drugs like rifampicin (gives orange color to urine), erythromycin, nitrofurantoin, and some herbal medicines can cause drug-induced cholestasis, raising direct bilirubin and causing jaundice.', displayOrder: 5 },
      ],
    },
    {
      testName: 'SGPT (ALT)',
      items: [
        { question: 'What does SGPT (ALT) measure?', answer: 'SGPT (Serum Glutamate Pyruvate Transaminase), now called ALT (Alanine Aminotransferase), is an enzyme primarily found in liver cells. When liver cells are damaged, ALT leaks into the bloodstream. It is the most liver-specific enzyme and the primary test for liver damage.', displayOrder: 1 },
        { question: 'What is a mildly elevated ALT and should I be worried?', answer: 'A mildly elevated ALT (1–3 times normal range) can be caused by fatty liver, obesity, alcohol use, medications, or intense exercise. Isolated mild elevation without symptoms is common and may not indicate serious disease, but it should be monitored and investigated with an ultrasound and additional liver tests.', displayOrder: 2 },
        { question: 'Can exercise raise my ALT?', answer: 'Yes. Strenuous exercise can cause mild ALT elevation from muscle breakdown. ALT is also found in muscle tissue. For an accurate liver-specific assessment, avoid heavy exercise for 24 hours before the test.', displayOrder: 3 },
        { question: 'What level of ALT requires urgent attention?', answer: 'ALT above 10 times the upper limit of normal (typically above 400–500 IU/L) suggests acute liver injury and requires urgent medical evaluation. This can occur with acute viral hepatitis, drug toxicity (especially paracetamol overdose), or ischemic hepatitis.', displayOrder: 4 },
        { question: 'Is SGPT the same as SGOT?', answer: 'No. SGPT (ALT) is more liver-specific, while SGOT (AST) is found in the liver, heart, and skeletal muscle. An AST:ALT ratio greater than 2:1 is characteristic of alcoholic liver disease. Both together provide more diagnostic information than either alone.', displayOrder: 5 },
      ],
    },
    {
      testName: 'Hepatitis B Surface Antigen',
      items: [
        { question: 'What does a positive HBsAg result mean?', answer: 'A positive HBsAg means you currently have Hepatitis B virus (HBV) in your blood. This could indicate an acute infection (if recent exposure) or chronic infection (if positive for more than 6 months). You should consult a doctor for further evaluation and advice on preventing transmission.', displayOrder: 1 },
        { question: 'What tests are done after a positive HBsAg?', answer: 'After a positive HBsAg, your doctor will order additional tests including HBeAg, Anti-HBe, Hepatitis B Viral Load (HBV DNA), Liver Function Tests, and possibly a liver ultrasound to assess the severity and stage of infection.', displayOrder: 2 },
        { question: 'Can HBsAg become negative on its own?', answer: 'In acute hepatitis B infection, about 90–95% of healthy adults clear the virus within 6 months and HBsAg becomes negative. In chronic infection (more than 6 months), spontaneous HBsAg clearance is rare but possible (approximately 1% per year).', displayOrder: 3 },
        { question: 'Is Hepatitis B curable?', answer: 'Hepatitis B is not considered fully curable with current treatments (the virus DNA can persist in liver cells), but it is very effectively managed. Antiviral drugs (tenofovir, entecavir) can suppress viral replication to undetectable levels and prevent liver damage and cancer.', displayOrder: 4 },
        { question: 'Can I transmit Hepatitis B to my family?', answer: 'Yes. Hepatitis B is transmitted through blood, unprotected sexual contact, and from mother to child during birth. Close household contacts and sexual partners of HBsAg-positive individuals should be tested and vaccinated if not immune.', displayOrder: 5 },
      ],
    },
    {
      testName: 'Vitamin D Total (25-OH)',
      items: [
        { question: 'What is the difference between Vitamin D2 and Vitamin D3?', answer: 'Vitamin D3 (cholecalciferol) is produced in your skin by sunlight and is more effective at raising blood Vitamin D levels. Vitamin D2 (ergocalciferol) comes from plant sources. The 25-OH Vitamin D test measures the total of both D2 and D3 and is the best indicator of overall Vitamin D status.', displayOrder: 1 },
        { question: 'What are normal Vitamin D levels?', answer: 'Normal: 30–100 ng/mL. Insufficient: 20–29 ng/mL. Deficient: below 20 ng/mL. Toxic: above 150 ng/mL. Most Indians are found to be deficient or insufficient due to limited outdoor sun exposure and dietary habits.', displayOrder: 2 },
        { question: 'Can I get enough Vitamin D from sunlight alone?', answer: 'In theory yes, but in practice most urban Indians do not get adequate sun exposure due to indoor work, clothing, sunscreen, and air pollution. 15–20 minutes of midday sun on arms and legs can generate significant Vitamin D, but this varies greatly by skin tone, latitude, and season.', displayOrder: 3 },
        { question: 'What are the symptoms of Vitamin D deficiency?', answer: 'Vitamin D deficiency can cause bone pain, muscle weakness, fatigue, frequent infections, and mood changes. Severe deficiency in children causes rickets; in adults it causes osteomalacia (soft bones). Many deficient individuals have no symptoms at all.', displayOrder: 4 },
        { question: 'Can Vitamin D supplements be harmful?', answer: 'Vitamin D toxicity is rare but possible with very high supplementation (above 10,000 IU/day for prolonged periods). It causes hypercalcemia (high blood calcium) leading to nausea, kidney stones, and cardiac issues. Always take supplements under medical guidance with regular monitoring.', displayOrder: 5 },
      ],
    },
    {
      testName: 'Vitamin B12 (Cobalamin)',
      items: [
        { question: 'What is the normal range for Vitamin B12?', answer: 'Normal serum Vitamin B12 is generally 200–900 pg/mL (148–664 pmol/L). Values below 200 pg/mL are considered deficient. However, some individuals develop functional B12 deficiency (affecting nerve function) even with borderline normal blood levels.', displayOrder: 1 },
        { question: 'Who is most at risk for Vitamin B12 deficiency?', answer: 'Vegetarians and vegans (B12 is found only in animal products), the elderly, patients on long-term metformin, people with pernicious anemia (autoimmune condition reducing B12 absorption), those with Crohn\'s disease or celiac disease, and heavy alcohol users are at highest risk.', displayOrder: 2 },
        { question: 'What are the symptoms of B12 deficiency?', answer: 'Symptoms include tingling or numbness in hands and feet (peripheral neuropathy), fatigue, weakness, glossitis (inflamed tongue), megaloblastic anemia (large immature red blood cells), memory problems, and in severe cases, subacute combined degeneration of the spinal cord.', displayOrder: 3 },
        { question: 'Why does metformin cause Vitamin B12 deficiency?', answer: 'Metformin reduces calcium-dependent B12 absorption in the terminal ileum by competing with calcium needed for the B12-intrinsic factor complex to be absorbed. This effect is dose-dependent and cumulative, affecting 10–30% of long-term metformin users.', displayOrder: 4 },
        { question: 'Can oral B12 supplements work or do I need injections?', answer: 'For most deficiency cases including those with dietary deficiency or metformin use, high-dose oral B12 (500–1000 mcg daily) is as effective as injections because a small fraction is absorbed by passive diffusion even without intrinsic factor. Injections are specifically needed for pernicious anemia or severe neurological involvement.', displayOrder: 5 },
      ],
    },
    {
      testName: 'Iron Profile',
      items: [
        { question: 'What parameters are measured in an iron profile?', answer: 'An iron profile measures Serum Iron (circulating iron), TIBC (Total Iron Binding Capacity, reflecting transferrin protein), Transferrin Saturation (percentage of TIBC occupied by iron), and Serum Ferritin (iron stores in tissues). Together these distinguish between different types of iron status disorders.', displayOrder: 1 },
        { question: 'What is the difference between iron deficiency and iron deficiency anemia?', answer: 'Iron deficiency exists when ferritin and iron stores are low but hemoglobin is still normal. Iron deficiency anemia is the advanced stage where iron stores are depleted enough that hemoglobin production is impaired, causing low hemoglobin and symptomatic anemia.', displayOrder: 2 },
        { question: 'Why is ferritin important?', answer: 'Ferritin is the main intracellular iron storage protein. Low ferritin is the earliest and most sensitive indicator of iron deficiency, appearing before serum iron drops or anemia develops. High ferritin indicates iron overload or, being an acute phase reactant, can also be elevated in infections and inflammation.', displayOrder: 3 },
        { question: 'What does high transferrin saturation mean?', answer: 'High transferrin saturation (above 45%) combined with high ferritin suggests iron overload, which may indicate hereditary hemochromatosis, a genetic condition causing excessive iron absorption that can damage the liver, heart, and pancreas.', displayOrder: 4 },
        { question: 'How long does it take to correct iron deficiency?', answer: 'With oral iron supplementation, ferritin levels begin to rise within 2–4 weeks. Hemoglobin corrects over 4–8 weeks. However, full iron store replenishment requires continued supplementation for 3–6 months after hemoglobin normalizes. Do not stop iron supplementation early.', displayOrder: 5 },
      ],
    },
    {
      testName: 'Calcium Test',
      items: [
        { question: 'What does serum calcium measure?', answer: 'Serum calcium measures the total calcium in your blood, including calcium bound to proteins (mainly albumin) and free ionized calcium. Calcium is essential for bone health, nerve signaling, muscle contraction, and blood clotting.', displayOrder: 1 },
        { question: 'What is the normal range for serum calcium?', answer: 'Normal serum calcium is 8.5–10.2 mg/dL (2.12–2.55 mmol/L). Values above 10.5 mg/dL indicate hypercalcemia; values below 8.5 mg/dL indicate hypocalcemia. Always check if albumin is simultaneously measured, as low albumin can mask true calcium status.', displayOrder: 2 },
        { question: 'What causes hypercalcemia (high calcium)?', answer: 'The most common causes are primary hyperparathyroidism (overactive parathyroid gland, usually from a benign adenoma) and malignancy (cancer releasing calcium from bones or producing PTH-related protein). Other causes include Vitamin D toxicity, sarcoidosis, and prolonged immobilization.', displayOrder: 3 },
        { question: 'What are symptoms of low calcium (hypocalcemia)?', answer: 'Low calcium causes muscle cramps, tingling around the mouth and fingers, carpopedal spasm, and in severe cases, tetany (sustained muscle contractions) and seizures. Chronic hypocalcemia causes dental problems, cataracts, and soft tissue calcium deposits.', displayOrder: 4 },
        { question: 'Do calcium supplements affect serum calcium levels?', answer: 'Oral calcium supplements have a modest and transient effect on serum calcium in healthy individuals with functioning parathyroid glands. However, in patients with impaired parathyroid function or kidney disease, calcium supplements can significantly raise serum calcium.', displayOrder: 5 },
      ],
    },
    {
      testName: 'Dengue Duo NS1+IgG+IgM',
      items: [
        { question: 'What does the Dengue Duo test detect?', answer: 'The Dengue Duo detects three markers simultaneously: NS1 Antigen (viral protein present in the first 5 days of illness), IgM antibody (produced from day 5 onwards indicating recent infection), and IgG antibody (indicates prior dengue immunity or secondary infection).', displayOrder: 1 },
        { question: 'Why does dengue need to be tested early?', answer: 'NS1 antigen is detectable only in the first 5 days of acute dengue infection (viremic phase). After day 5, the virus clears and NS1 may become undetectable even if you have dengue. IgM then becomes the primary diagnostic marker. Early testing maximizes detection accuracy.', displayOrder: 2 },
        { question: 'What does a positive IgG with negative IgM mean?', answer: 'A positive IgG with negative IgM typically indicates past dengue infection and immunity from a previous episode. It does not confirm active infection. A positive IgM (with or without IgG) indicates current or very recent infection.', displayOrder: 3 },
        { question: 'Is there a cure or treatment for dengue?', answer: 'There is no specific antiviral treatment for dengue. Management is supportive: adequate hydration, paracetamol for fever (avoid aspirin and NSAIDs as they increase bleeding risk), rest, and monitoring for warning signs of severe dengue such as severe abdominal pain, persistent vomiting, or bleeding.', displayOrder: 4 },
        { question: 'What are warning signs that dengue is becoming severe?', answer: 'Warning signs of severe dengue include severe abdominal pain, persistent vomiting, rapid breathing, bleeding gums or nose, blood in vomit or stool, fatigue and restlessness, and liver enlargement. If these occur, seek emergency care immediately — severe dengue can be life-threatening.', displayOrder: 5 },
      ],
    },
    {
      testName: 'Typhoid Rapid Test',
      items: [
        { question: 'How accurate is the Typhoid Rapid Test?', answer: 'The typhoid rapid antigen test has a sensitivity of approximately 70–80% and specificity of 85–90%. While convenient for quick results in 15 minutes, it may miss early infections and should be confirmed with a blood culture in high clinical suspicion cases with negative rapid results.', displayOrder: 1 },
        { question: 'What is Widal test and is it better than rapid typhoid?', answer: 'The Widal test detects antibodies against Salmonella Typhi and has been used historically. However, it is considered unreliable for diagnosis due to low specificity (positive in people with past infection or previous vaccination) and delayed antibody rise. The rapid antigen test and blood culture are preferred.', displayOrder: 2 },
        { question: 'Can typhoid be treated at home?', answer: 'Mild uncomplicated typhoid in healthy adults can often be managed at home with oral antibiotics (azithromycin or cefixime) under close medical supervision. Severe cases with high fever, intestinal perforation risk, or severe weakness require hospitalization and intravenous antibiotics.', displayOrder: 3 },
        { question: 'Is there a vaccine for typhoid?', answer: 'Yes. Typhoid vaccines are available as either an oral live attenuated vaccine (Ty21a, taken as 3–4 capsules on alternate days) or an injectable Vi polysaccharide vaccine (single dose). Vaccines are recommended for travellers to endemic areas and provide 60–80% protection for 3–7 years.', displayOrder: 4 },
        { question: 'How long does typhoid fever typically last?', answer: 'Untreated typhoid fever typically lasts 3–4 weeks with rising fever, abdominal symptoms, and increasing weakness. With appropriate antibiotic treatment, fever usually subsides within 3–5 days, though complete recovery and clearance of the bacteria can take 2–4 weeks.', displayOrder: 5 },
      ],
    },
    {
      testName: 'Malaria PF/PV Rapid',
      items: [
        { question: 'What does PF/PV mean in malaria testing?', answer: 'PF refers to Plasmodium falciparum (the most dangerous malaria species causing cerebral malaria and severe disease) and PV refers to Plasmodium vivax (the most common malaria species in India, which can relapse). The rapid test differentiates between the two species to guide appropriate treatment.', displayOrder: 1 },
        { question: 'How quickly does malaria rapid test give results?', answer: 'The malaria rapid diagnostic test (RDT) provides results within 15–20 minutes. This speed is critical for starting treatment promptly, especially in falciparum malaria where delays can be life-threatening.', displayOrder: 2 },
        { question: 'Can malaria rapid tests miss infections?', answer: 'Yes. At very low parasite densities (early infection) or after partial treatment, antigen levels may be below the detection threshold of the rapid test. A negative RDT in a symptomatic patient with travel history to endemic areas should be confirmed with a peripheral smear or PCR.', displayOrder: 3 },
        { question: 'What is the treatment for malaria?', answer: 'Falciparum malaria is treated with artemisinin-based combination therapy (ACT) such as artemether-lumefantrine. Vivax malaria is treated with chloroquine plus primaquine (to eliminate dormant liver forms and prevent relapse). Treatment must be supervised and completed fully.', displayOrder: 4 },
        { question: 'Can malaria come back after treatment?', answer: 'P. falciparum malaria does not relapse if fully treated. P. vivax forms dormant liver stages (hypnozoites) that can reactivate months to years later, causing relapse. Primaquine is specifically given to eliminate these liver stages and prevent vivax relapse.', displayOrder: 5 },
      ],
    },
    {
      testName: 'CRP Quantitative',
      items: [
        { question: 'What is the difference between CRP Quantitative and hsCRP?', answer: 'CRP Quantitative is used to detect and monitor acute infections and inflammatory conditions (useful range 10–500 mg/L). hsCRP (High-Sensitivity CRP) measures very low chronic inflammation levels (below 10 mg/L) used for cardiovascular risk assessment. Both measure the same protein but at different sensitivity ranges.', displayOrder: 1 },
        { question: 'What is a high CRP value?', answer: 'CRP levels above 10 mg/L indicate significant inflammation. Levels of 10–40 mg/L suggest mild inflammation (viral infection, minor bacterial infection). Levels above 100 mg/L strongly suggest a serious bacterial infection and may prompt urgent medical evaluation.', displayOrder: 2 },
        { question: 'How fast does CRP rise during an infection?', answer: 'CRP is an acute phase reactant that rises within 6 hours of infection or tissue injury and can double every 8 hours, reaching peak levels within 24–72 hours. This rapid rise makes CRP a useful early marker of infection before other signs appear.', displayOrder: 3 },
        { question: 'Can CRP monitor treatment response?', answer: 'Yes. CRP is an excellent treatment response monitor. With effective antibiotic treatment, CRP should begin to fall within 48–72 hours. Persistently elevated or rising CRP despite treatment suggests treatment failure, complications, or an alternative diagnosis.', displayOrder: 4 },
        { question: 'Can CRP be elevated in COVID-19?', answer: 'Yes. Elevated CRP is one of the hallmark findings in moderate to severe COVID-19, reflecting the inflammatory response to SARS-CoV-2. CRP levels above 100 mg/L in COVID-19 are associated with more severe disease and increased risk of ICU admission and mechanical ventilation.', displayOrder: 5 },
      ],
    },
    {
      testName: 'COVID-19 RT PCR',
      items: [
        { question: 'Why is RT-PCR the gold standard for COVID-19 diagnosis?', answer: 'RT-PCR (Reverse Transcription Polymerase Chain Reaction) directly detects the genetic material (RNA) of the SARS-CoV-2 virus with very high sensitivity (95%+) and specificity (99%+). It can detect the virus even at very low viral loads before symptoms appear, making it far more accurate than rapid antigen tests.', displayOrder: 1 },
        { question: 'How long does it take to get COVID RT-PCR results?', answer: 'RT-PCR results are typically available within 24 hours of sample collection. Results are sent directly to the app. An express option may be available for time-sensitive needs such as international travel.', displayOrder: 2 },
        { question: 'Can I test positive even after recovery?', answer: 'Yes. RT-PCR can detect residual viral RNA (genetic fragments) for weeks after active infection has resolved. A positive result after clinical recovery does not necessarily mean you are still infectious. Ct (Cycle Threshold) values from the PCR can help assess viral load.', displayOrder: 3 },
        { question: 'What does a negative RT-PCR result mean?', answer: 'A negative result means SARS-CoV-2 RNA was not detected in your sample at the time of collection. A negative result does not completely rule out infection if the test was done very early (before sufficient viral load accumulated) or if sample collection was inadequate.', displayOrder: 4 },
        { question: 'Is home collection safe for COVID-19 swab testing?', answer: 'Yes. Our COVID-19 home collection phlebotomists are fully trained in PPE (N95 masks, face shields, gloves, and gowns), proper swab collection technique, and bio-waste disposal. Our protocols comply with ICMR guidelines for COVID-19 sample collection.', displayOrder: 5 },
      ],
    },
  ];

  for (const prepGroup of prepData) {
    const testId = byName(prepGroup.testName);
    if (!testId) continue;
    await prisma.testPreparation.createMany({
      skipDuplicates: true,
      data: prepGroup.items.map(item => ({
        testId,
        title: item.title,
        description: item.description,
        appliesTo: item.appliesTo,
        displayOrder: item.displayOrder,
      })),
    });
  }

  for (const faqGroup of faqData) {
    const testId = byName(faqGroup.testName);
    if (!testId) continue;
    await prisma.testFAQ.createMany({
      skipDuplicates: true,
      data: faqGroup.items.map(item => ({
        testId,
        question: item.question,
        answer: item.answer,
        displayOrder: item.displayOrder,
      })),
    });
  }

  console.log('Tests seeded with preparation guidelines and FAQs');
}