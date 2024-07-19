import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/privacy-policy')({
  component: PageComponent,
});

function PageComponent() {
  return (
    <div id="privacy-policy" className="w-full mx-auto max-w-screen-xl px-6 py-10 md:py-[120px] font-Roboto">
      <h1 className="text-[32px] text-left uppercase lg:text-[80px] leading-tight mb-7">PRIVACY POLICY</h1>

      <article className="text-base leading-relaxed text-justify">
        <p className="mb-[1.25rem]">Effective Date: Aug 28, 2024</p>

        <p>
          This Privacy Notice explains how GPD Labs ("our," "we," or "us") collects, uses, and discloses personal
          information in connection with our website, gpdlabs.io, the GPD Community (including the GPD Developer), and
          all related services (including contact with our customer service team, engagement with us on social media, or
          other related interactions with us) (collectively the “services”).
        </p>
        <p>
          This Privacy Notice does not address our privacy practices relating to GPD job applicants, employees and other
          personnel. This Privacy Notice is also not a contract and does not create any legal rights or obligations.
        </p>
        <p>OUR COLLECTION OF PERSONAL INFORMATION</p>
        <p>
          GPD Labs is the controller of the personal information we collect or otherwise maintain in connection with our
          services. This means that we determine and are responsible for how personal information is used.
        </p>
        <p>
          The categories of personal information we collect depend on how you interact with us and our services. GPD
          Labs collects information that individuals provide directly to us, information we collect automatically when
          individuals interact with us, and information we collect from third-party sources and other organizations.
        </p>
        <p>Personal Information Individuals Provide Directly to Us</p>
        <p>
          We may collect the following personal information individuals provide directly to us in connection with our
          services:
        </p>
        <ul className="list-disc pl-5">
          <li>
            Contact Information, including name, email address, social media handles, and communication preferences.
          </li>
          <li>
            Referral Information, including information about friends and family an individual would like to refer to
            our services.
          </li>
          <li>
            Account Information, including username, profile pictures, profile description, general location, trust
            level, join date, and the products and services developed, used, or interacted with (including access to GPD
            developer tools and APIs), and any requests for feedback you provide in connection with your account,
            including requests for feedback on code you have developed.
          </li>
          <li>
            Community Information, including number of days visited, topics and posts created, topics viewed, posts
            read, time spent reading, likes given and received, badges, certifications, and community preferences.
          </li>
          <li>
            Gaming Information, including gaming accounts, games played, time spent gaming, in-game points earned and
            spent, rewards earned and redeemed, and in-game content generated, posted, or interacted with.
          </li>
          <li>
            Payment Information, including payment card information, billing address, and other financial information
            (such as, routing and account number). Please note that we use third-party payment providers, including
            Stripe, to process payments made to us. We do not retain any personally identifiable financial information,
            such as payment card number, you provide these third-party payment providers in connection with payments.
            Rather, all such information is provided directly by you to our third-party payment providers. The payment
            provider’s use of your personal data is governed by their privacy notice. To view Stripe’s privacy policy,
            please click here.
          </li>
          <li>
            Event, Contest, Promotion, and Survey Information, including contact information, preferences, feedback, and
            other relevant content provided when signing up for an event, entering a contest or promotion, or completing
            a survey.
          </li>
          <li>
            Inquiry Information, including information provided in custom messages sent through our services or provided
            directly to a member of our team.
          </li>
        </ul>
        <p>
          When an individual chooses to contact us, we may need additional information to fulfill the request or respond
          to inquiries. We may provide additional privacy-related information where the scope of the inquiry/request
          and/or personal information we require fall outside the scope of this Privacy Notice. In that case, the
          additional privacy notice will govern how we may process the information provided at that time.
        </p>
        <p>Personal Information Automatically Collected</p>
        <p>
          As is true of many digital platforms, we and our third-party providers may also collect certain personal
          information from an individual’s device, browsing actions, and site usage patterns automatically when visiting
          or interacting with our services, which may include:
        </p>
        <ul className="list-disc pl-5">
          <li>
            Log Data, such as cookie identifiers, internet protocol (IP) address, mobile carrier, MAC address, user
            settings, mobile ad identifiers, Internet service provider, browser or device information, the URL entered
            and the referring page/campaign, date/time of visit, the time spent on our services, and any errors that may
            occur during the visit to our services.
          </li>
          <li>
            Analytics Data, such as the electronic path taken to our services, through our services, and when exiting
            our services, as well as information pertaining to usage and activity on our services (including pages
            visited, links clicked, content interacted with, and duration and frequency of the activities).
          </li>
          <li>
            Location Data, such as general geographic location based on the log data we or our third-party providers
            collect.
          </li>
        </ul>
        <p>
          For information about our and our third-party providers’ use of cookies and related technologies to collect
          information automatically, and any choices individuals may have in relation to its collection, please review
          the Cookies and Related Technologies section below.
        </p>
        <p>Personal Information from Third Parties and Other Sources</p>
        <p>
          We also obtain personal information from third-party sources, which we often combine with personal information
          we collect either automatically or directly from an individual.
        </p>
        <p>
          We may receive the same categories of personal information as described above from the following third
          parties:
        </p>
        <ul className="list-disc ml-5">
          <li>
            Affiliates: We may receive personal information from other companies owned or controlled by GPD Labs, and
            other companies owning or under common ownership with GPD Labs, particularly when we collaborate in
            providing services.
          </li>
          <li>
            Community and Gaming Participants: We may receive personal information from other participants in the GPD
            community, including users of Games, to help support an individual’s interaction with the GPD community.
          </li>
          <li>
            Referrals: We offer a referral service through which an individual can provide contact information of family
            and friends who may be interested in our services. We use personal information collected in connection with
            these referral services to communicate with the friend or family member being referred and to provide the
            referring individual any benefits, incentives and/or rewards they may be eligible for as a result of their
            referral. Please share information only for people that you know.
          </li>
          <li>
            Single Sign-On: Some parts of our services may allow community members to login through a third-party email
            service, social network or other authentication service such as Discord, Google, Microsoft, Apple, or
            Github. These services will authenticate the community member’s identity and provide them the option to
            share certain personal information with us, which could include name, email address, address book and
            contacts, or other information. The data we receive is dependent on that third party’s policies and the
            community member’s privacy settings on that third-party site. However, we do not receive the community
            member’s login credentials for the relevant third-party service. Instead, we receive tokens from the single
            sign-on service to help identify the community member in our system (such as by their username or e-mail
            address) and confirm the community member successfully authenticated with the single sign-on services. This
            information allows us to more easily provide community members access to our platform and services.
          </li>
          <li>
            Social Media: If an individual chooses to interact with us on social media, we may collect personal
            information about them from their social media account that they make public. We use personal information
            collected in connection with their social media account to communicate with them, better understand their
            interests and preferences, and better understand our user base in the aggregate.
          </li>
          <li>
            Identity Verification Providers: In rare circumstances, we may engage third-party identity verification
            providers to help us verify the identity of a specific individual with whom we are interacting. This
            information is used primarily for purposes of preventing fraud.
          </li>
          <li>
            Event, Promotion and Other Business Partners: We may from time to time offer opportunities for individuals
            to take part in events or promotions, or obtain services provided in connection with a third-party business
            partner. Our event, promotion, and other business partners may collect or share personal information with us
            in connection with the relevant event, promotion or service. For example, we may receive personal
            information from third-party business partners that help foster the GPD Labs community in order to identify
            community members eligible for benefits in relation to a promotion.
          </li>
          <li>
            Data Analytics Providers: We rely on third-party providers to help us collect analytics relating to our
            services and user base. These data analytics providers often collect personal information directly from
            individuals and share some or all of this information with us in connection with their analytics services.
          </li>
          <li>
            Other Service Providers: Other service providers that perform services solely on our behalf, such as website
            hosting and marketing providers, collect personal information and often share some or all of this
            information with us in connection with their services.
          </li>
          <li>
            Information Providers: We may from time to time obtain information from third-party information providers to
            correct or supplement personal information we collect. For example, we may obtain updated contact
            information from third-party information providers to connect with an individual who may be interested in
            our services.
          </li>
          <li>
            Publicly Available Sources: We collect personal information about individuals that we do not otherwise have,
            such as contact information or an individual’s interest in our services, from publicly available sources. We
            may combine this information with the information we collect from an individual directly.
          </li>
          <li>
            Inferences: We may generate inferences or predictions about individuals and their interests and preferences
            based on the other personal information we collect and the interactions we have with the individuals.
          </li>
        </ul>
        <p>Our Collection of Blockchain Information</p>
        <p>
          Blockchain is a shared, immutable ledger used to record transactions of assets. In connection with our
          services, we may collect the following blockchain information directly from individuals, from the third
          parties identified above, or from the public blockchain itself (including the GPD blockchain):
        </p>
        <ul className="list-disc ml-5">
          <li>Account Address: The unique blockchain address or domain from or to which assets are transferred.</li>
          <li>Wallet Information: The wallet connected to a specific account address. </li>
          <li>
            Account Balance & Assets: The balance associated with the blockchain address, as well as the assets stored
            in connection with that account.
          </li>
          <li>
            Transaction Details: The transaction identifier, blockchain position for the transaction, date and time of
            the transaction, type of transaction, amount sent or received, fee amount, account address of the sender and
            recipient, and storage size of the transaction.
          </li>
          <li>Connected Apps: The name of the apps to which an individual connects using our blockchain services.</li>
        </ul>
        <p>
          We may in certain circumstances combine the blockchain information we obtain with the personal information
          described above.
        </p>
        <p>OUR USE OF PERSONAL INFORMATION AND BLOCKCHAIN INFORMATION</p>
        <p>We use the information we collect to: </p>
        <ul className="list-disc ml-5">
          <li>
            Fulfill or meet the reason the information was provided, such as to fulfill our contractual obligations, to
            facilitate payment for our products and services, or to deliver the services requested;
          </li>
          <li>Manage our organization and its day-to-day operations; </li>
          <li>Administer, provide, maintain, improve, and personalize our products and services;</li>
          <li>Improve and support the GPD community; </li>
          <li>Facilitate identity and transaction management services at your request; </li>
          <li>
            Process or otherwise facilitate transactions and send you related information, including confirmations,
            receipts, invoices, customer experience surveys, and recall notices;
          </li>
          <li>Personalize and improve your experience on our services;</li>
          <li>Send you technical notices, security alerts, and support and administrative messages;</li>
          <li>Respond to your comments and questions and provide customer service;</li>
          <li>
            Communicate with you about products, services, and events offered by GPD and others and provide news and
            information that we think will interest you;
          </li>
          <li>
            Tailor and provide you with content and advertisements, including through in-person events, social media,
            email, and other online venues, based on individual interests and interactions with us;
          </li>
          <li>Monitor and analyze trends, usage, and activities in connection with our services;</li>
          <li>Facilitate contests, sweepstakes, and promotions and process and deliver entries and rewards;</li>
          <li>Test, enhance, update, and monitor the services, or diagnose or fix technology problems; </li>
          <li>
            Help maintain the safety, security, and integrity of our property and services, technology assets, and
            business;
          </li>
          <li>Defend, protect, or enforce our rights or applicable contracts and agreements; </li>
          <li>
            Detect, prevent, investigate, or provide notice of security incidents or other malicious, deceptive,
            fraudulent, or illegal activity and protect the rights and property of GPD and others;
          </li>
          <li>Debug to identify and repair errors in our services;</li>
          <li>Facilitate business transactions and reorganizations impacting the structure of our business;</li>
          <li>Comply with our legal and financial obligations; and</li>
          <li>Carry out any other purpose described to you at the time the information was collected.</li>
        </ul>
        <p>OUR DISCLOSURE OF PERSONAL INFORMATION AND BLOCKCHAIN INFORMATION</p>
        <p>We disclose the information we collect to:</p>
        <ul className="list-disc ml-5">
          <li>
            Affiliates: We share information with other companies owned or controlled by GPD Labs, and other companies
            owning or under common ownership with GPD Labs, particularly when we collaborate in providing services.
          </li>
          <li>
            Referrals: We may share the name of a referring individual with the friends and family the individual refers
            to our services, as well as any other content or custom message the referring individual wishes to share.
          </li>
          <li>
            Identity Verification Providers: Where we engage a third-party identity verification provider to help us
            verify the identity of a specific individual with whom we are interacting, we will typically provide the
            third-party identity verification provider sufficient information to facilitate the identity verification
            service.
          </li>
          <li>
            Event, Promotion and Other Business Partners: Just as we may receive information from our event, promotion
            and other business partners, we may share information with them in connection with the relevant event,
            promotion or service we are offering. For example, we may share information with third-party business
            partners that help foster the GPD community in order to have them facilitate communication between us and
            members of the GPD community. We may also share information with third-party business partners when we
            transfer a product or service to that third-party business partner in order for them to administer the
            product or service on a go-forward basis.
          </li>
          <li>
            Data Analytics Providers: We may share information with our data analytics providers to facilitate the
            analytics services they are providing us.
          </li>
          <li>
            Other Service Providers: In addition to the third parties identified above, we engage other third-party
            service providers that perform business or operational services for us or on our behalf, such as web
            hosting, shipping and delivery, fraud prevention, customer service, contests, sweepstakes, promotions, and
            marketing and advertising service. Depending on the function the provider serves, the service provider may
            process information on our behalf or have access to information while performing functions on our behalf.
          </li>
          <li>
            Other Businesses as Needed to Provide Services: We may share information with third parties you engage with
            through our services or as needed to fulfill a request or transaction including, for example, payment
            processing services.
          </li>
          <li>
            Business Transaction or Reorganization: We may share or otherwise disclose personal information or
            blockchain information to a third party during negotiations concerning, in connection with, or as an asset
            in a merger, sale or other transfer of company assets, joint venture, financing, or acquisition of all or a
            portion of our business by another company. Personal information or blockchain information may also be
            disclosed in the event of insolvency, bankruptcy, or receivership.
          </li>
          <li>
            Legal Obligations and Rights: We share or otherwise disclose information to third parties, such as our
            lawyers, other professional advisors and law enforcement:
          </li>
          <li>Where necessary to obtain advice or otherwise protect and manage our business interests;</li>
          <li>In connection with the establishment, exercise, or defense of legal claims;</li>
          <li>
            To comply with laws or to respond to lawful requests or legal process, including lawful requests by public
            authorities to meet national security or law enforcement requirements;
          </li>
          <li>
            To protect our rights and property and the rights and property of others, including to enforce our
            agreements and policies;
          </li>
          <li>To detect, suppress, or prevent fraud; </li>
          <li>To protect the health and safety of us and others; or </li>
          <li>As otherwise required by applicable law. </li>
          <li>
            Otherwise with Consent or Direction: We may share or otherwise disclose information with your consent or at
            your direction.
          </li>
        </ul>
        <p>COOKIES AND RELATED TECHNOLOGIES</p>
        <p>
          We engage third parties to provide us with analytics and other services across the web and in mobile apps. We
          and our third-party providers may use (i) cookies or small data files that are stored on an individual’s
          computer and (ii) other, similar technologies, such as web beacons, pixels, embedded scripts,
          location-identifying technologies and logging technologies (collectively, “cookies”) to automatically collect
          personal information and use or disclose the personal information for the purposes described in the sections
          above, including to analyze and track data, determine the popularity of certain content, and better understand
          each user’s online activity. Some examples of our third-party cookie providers include:
        </p>
        <ul className="list-disc ml-5">
          <li>
            Google Analytics. For more information about how Google uses your data, please visit Google Analytics
            Privacy Policy. You can also view Google’s currently available opt-out options for Google Analytics here.
          </li>
          <li>Hotjar. To learn about how Hotjar uses your data, please visit the Hotjar Privacy Policy.</li>
          <li>Mailchimp. To learn about how Mailchimp uses your data, please visit the Intuit Privacy Statement.</li>
          <li>
            Segment. For more information about how Segment uses your data, please visit the Twilio Privacy Policy.
          </li>
          <li>Sentry. For more information about how Sentry uses your data, please visit the Sentry Privacy Policy.</li>
          <li>Stitch. To learn more about how Stich uses your data, please visit the Talend Privacy Statement.</li>
        </ul>
        <p>
          If an individual would prefer not to accept cookies, most browsers will allow the individual to: (i) change
          the individual’s browser settings to notify the individual when the individual receives a cookie, which lets
          the individual choose whether or not to accept it; (ii) disable existing cookies; or (iii) set the
          individual’s browser to automatically reject cookies. Please note that doing so may negatively impact the
          individual’s experience using our website, as some features and offerings may not work properly or at all.
          Depending on the individual’s device and operating system, the individual may not be able to delete or block
          all cookies. In addition, if the individual wants to reject cookies across all browsers and devices, the
          individual will need to do so on each browser on each device the individual actively uses.
        </p>
        <p>
          The individual may also set their email options to prevent the automatic downloading of images that may
          contain technologies that would allow us to know whether they have accessed our email and performed certain
          functions with it.
        </p>
        <p>REGION-SPECIFIC DISCLOSURES</p>
        <p>
          We may choose or be required by law to provide different or additional disclosures relating to the processing
          of personal information about residents of certain countries, regions or states. Please see below for
          disclosures that may be applicable to you:
        </p>
        <ul className="list-disc ml-5">
          <li>
            If you are a resident of the State of California, Colorado, Connecticut, Nevada, Utah, or Virginia in the
            United States, please see the Additional United States Privacy Disclosures below.
          </li>
        </ul>
        <p>CHILDREN’S PERSONAL INFORMATION</p>
        <p>
          Our services are not directed to, and we do not intend to, or knowingly, collect or solicit personal
          information from children under the age of 13. If an individual is under the age of 13, they should not use
          our services or otherwise provide us with any personal information either directly or by other means. If a
          child under the age of 13 has provided personal information to us, we encourage the child’s parent or guardian
          to contact us to request that we remove the personal information from our systems. If we learn that any
          personal information we collect has been provided by a child under the age of 13, we will promptly delete that
          personal information.
        </p>
        <p>LINKS TO THIRD-PARTY WEBSITE OR SERVICE</p>
        <p>
          Our services may include links to third-party websites, plug-ins, and applications. Except where we post, link
          to, or expressly adopt or refer to this Privacy Notice, this Privacy Notice does not apply to, and we are not
          responsible for, any personal information practices of third-party websites and online services or the
          practices of other third parties. To learn about the personal information practices of third parties, please
          visit their respective privacy notices.
        </p>
        <p>UPDATES TO THIS PRIVACY NOTICE</p>
        <p>
          We may change this Privacy Notice from time to time. If we make changes, we will notify you by revising the
          date at the top of this notice and, if we make material changes, we may provide you with additional notice
          (such as adding a statement to our services or sending you a notification). We encourage you to review this
          Privacy Notice regularly to stay informed about our information practices and the choices available to you.
        </p>
        <p>CONTACT US</p>
        <p>
          If you have any questions or requests in connection with this Privacy Notice or other privacy-related matters,
          please send an email to: contact@gpdlabs.io .
        </p>
        <p>ADDITIONAL UNITED STATES PRIVACY DISCLOSURES</p>
        <p>Nevada Residents </p>
        <p>
          If you are a resident of the state of Nevada in the United States, Chapter 603A of the Nevada Revised Statutes
          permits a Nevada resident to opt out of future sales of certain covered information that a website operator
          has collected or will collect about the resident. Although we do not currently sell covered information,
          please contact us at contact@gpdlabs.io with the subject line “Nevada Opt Out Request” to submit such a
          request.
        </p>
        <p>California, Colorado, Connecticut, Utah and Virginia Residents</p>
        <p>
          The remainder of this section supplements the information contained in our Privacy Notice by providing
          additional information about our personal information processing practices relating to individual residents of
          the States of California, Colorado, Connecticut, Utah and Virginia. For a detailed description of how we
          collect, use, and disclose personal information in connection with our services, please read the Privacy
          Notice above.
        </p>
        <p>No Sales or Targeted Advertising</p>
        <p>
          We do not sell personal information, and we do not process or otherwise share personal information for the
          purpose of displaying advertisements that are selected based on personal information obtained or inferred over
          time from an individual’s activities across non-affiliated businesses or websites, applications, or other
          services (otherwise known as “targeted advertising” or “cross-context behavioral advertising”).
        </p>
        <p>Sensitive Information </p>
        <p>
          We do not currently collect personal information that may be classified as “sensitive” under applicable
          privacy laws.
        </p>
        <p>Deidentified Information </p>
        <p>
          We may at times receive, or process personal information to create, deidentified information that can no
          longer reasonably be used to infer information about, or otherwise be linked to, a particular individual or
          household. Where we maintain deidentified information, we will maintain and use the information in
          deidentified form and not attempt to reidentify the information except as required or permitted by law.
        </p>
        <p>Your Privacy Rights</p>
        <p>
          Depending on your state of residency and subject to certain legal limitations and exceptions, you may be able
          to exercise some or all of the following rights:
        </p>
        <ul className="list-disc ml-5">
          <li>
            Right to Know: The right to confirm whether we are processing personal information about you and, under
            California law only, to obtain certain personalized details about the personal information we have collected
            about you, including:
          </li>
          <li>The categories of personal information collected;</li>
          <li>The categories of sources of the personal information;</li>
          <li>The purposes for which the personal information were collected; </li>
          <li>
            The categories of personal information disclosed to third parties (if any), and the categories of recipients
            to whom the personal information were disclosed;
          </li>
          <li>
            The categories of personal information shared for targeted advertising purposes (if any), and the categories
            of recipients to whom the personal information were disclosed for those purposes; and
          </li>
          <li>
            The categories of personal information sold (if any), and the categories of third parties to whom the
            personal information were sold.
          </li>
          <li>
            Right to Access & Portability: The right to obtain access to the personal information we have collected
            about you and, where required by law, the right to obtain a copy of the personal information in a portable
            and, to the extent technically feasible, readily usable format that allows you to transmit the data to
            another entity without hindrance.
          </li>
          <li>
            Right to Correction: The right to correct inaccuracies in your personal information, taking into account the
            nature of the personal information and the purposes of the processing of the personal information.
          </li>
          <li>Right to Deletion: The right to have us delete the personal information we maintain about you.</li>
        </ul>
        <p>
          Depending on your state of residency, you may also have the right to not receive retaliatory or discriminatory
          treatment in connection with a request to exercise the above rights. However, the exercise of the rights
          described above may result in a different price, rate or quality level of product or service where that
          difference is reasonably related to the impact the right has on our relationship or is otherwise permitted by
          law.
        </p>
        <p>Submitting Privacy Rights Requests</p>
        <p>
          To submit a request to exercise one of the privacy rights identified above, please: Send an email to
          contact@gpdlabs.io.
        </p>
        <p>
          Before processing your request, we may need to verify your identity and confirm you are a resident of a state
          that offers the requested right(s). In order to verify your identity, we will generally either require the
          successful authentication of a community membership, or the matching of sufficient information you provide us
          to the information we maintain about you in our systems. We may at times need to request additional
          information from you, taking into consideration our relationship with you and the sensitivity of your request.
        </p>
        <p>
          We will only use the personal information provided in the verification process to verify your identity or
          authority to make a request and to track and document request responses, unless you initially provided the
          information for another purpose. In certain circumstances, we may decline a privacy rights request,
          particularly where you are not a resident of one of the eligible states or where we are unable to verify your
          identity.
        </p>
        <p>Submitting Authorized Agent Requests</p>
        <p>
          In certain circumstances, you are permitted to use an authorized agent to submit requests on your behalf
          through the designated methods set forth above where we can verify the authorized agent’s authority to act on
          your behalf. In order to verify the authorized agent’s authority, we generally require evidence of either (i)
          a valid power of attorney or (ii) a signed letter containing your name and contact information, the name and
          contact information of the authorized agent, and a statement of authorization for the request. Depending on
          the evidence provided and your state of residency, we may still need to separately reach out to you to confirm
          the authorized agent has permission to act on your behalf and to verify your identity in connection with the
          request.
        </p>
        <p>Appealing Privacy Rights Decisions</p>
        <p>
          Depending on your state of residency, you may be able to appeal a decision we have made in connection with
          your privacy rights request. All appeal requests should be submitted by replying to the communication
          resolving your original request.
        </p>
        <p>California-Specific Disclosures</p>
        <p>The following disclosures only apply to residents of the State of California. </p>
        <p>California Categories of Personal Data</p>
        <p>
          California law requires we provide disclosures to you about what personal information we collect by reference
          to the enumerated categories of personal information set forth within California law. To address this
          obligation, we have identified the relevant enumerated California personal information category for the
          personal information described in the Our Collection of Personal Information section of our Privacy Notice, as
          well as the categories of personal information we collect from representatives of third-party entities, below:
        </p>
        <ul className="list-disc ml-5">
          <li>Identifiers, including name, email address, and social media handles. </li>
          <li>
            Customer Records, including Account Information, Community Information, Gaming Information, and Referral
            Information,
          </li>
          <li>Internet/Network Information, including Log Data and Analytics Data. </li>
          <li>
            Geolocation Data, including general geographic location based on the log data we or our third-party
            providers collect.
          </li>
          <li>Sensory Information, including profile pictures. </li>
          <li>
            Professional / Employment Information, including the business or organization an individual represents,
            their title with that business or organization and information relating to their role with the business or
            organization, which we use to communicate with the individual about the business or organization they
            represent.
          </li>
          <li>
            Other Personal Data, including communication preferences, inquiry information, personal information an
            individual permits us to see when interacting with us through social media, and personal information an
            individual provides us in relation to a question, request, inquiry, survey, contest or promotion.
          </li>
          <li>
            Inferences, including our predictions about interests and preferences and related service information.
          </li>
        </ul>
        <p>
          We disclose all of these categories of personal information for a business purpose to service providers or
          other third parties at the consumer’s direction, as outlined in the Our Disclosure of Personal Information
          section of our Privacy Notice.
        </p>
        <p>Retention of Personal Information </p>
        <p>
          We retain personal information only for as long as is reasonably necessary to fulfill the purpose for which it
          was collected. However, if necessary, we may retain personal information for longer periods of time, until set
          retention periods and deadlines expire, for instance where we are required to do so in accordance with legal,
          tax and accounting requirements set by a legislature, regulator or other government authority. To determine
          the appropriate duration of the retention of personal information, we consider the amount, nature and
          sensitivity of the personal information, the potential risk of harm from unauthorized use or disclosure of
          personal information and if we can attain our objectives by other means, as well as our legal, regulatory,
          tax, accounting and other applicable obligations.
        </p>
        <p>Removal of User-Generated Content</p>
        <p>
          Users of our platforms, like the Dice Network and QVRF, who are California residents under the age of 18 may
          request and obtain removal of user-generated content they posted on the platform. To submit such a request,
          please contact us at contact@gpdlabs.io. Please note that a request does not ensure complete or comprehensive
          removal of the material. For example, materials that were posted may have been republished or reposted by
          another user or third party.
        </p>
        <p>Notice of Financial Incentive</p>
        <p>
          We may choose to provide programs and other offerings intended to provide benefits to eligible participants
          that qualify as financial incentives under certain privacy laws. For example, the financial incentives we may
          choose to make available to interested individuals may include promotional materials or opportunities to
          obtain sweepstakes and contest prizes.
        </p>
        <p>
          To obtain access to certain of these programs and other offerings, we may ask to collect or share an
          interested individual’s personal information, including name and contact information. We consider the value of
          these programs and other offerings to be reasonably related to the value of the personal information we would
          receive and otherwise process in connection with these programs and offerings, based on our reasonable but
          sole determination and taking into consideration the expenses related to facilitating the program or offering.
        </p>
        <p>
          The terms applicable to each program and other offering will be provided at the time an eligible individual is
          offered an opportunity to participate. Interested individuals can opt-in to these financial incentives by
          following the instructions presented at the time the offer is made. Participating individuals may withdraw
          from our programs and other offerings at any time by following the instructions provided in connection with
          each offering or emailing us at <a href="mailto:contact@gpdlabs.io">contact@gpdlabs.io</a>.
        </p>
      </article>
    </div>
  );
}
