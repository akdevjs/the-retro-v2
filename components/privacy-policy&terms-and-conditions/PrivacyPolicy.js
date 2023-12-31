import { useEffect } from "react";
import { useRouter } from "next/router";
import Styles from "../../styles/privacypolicies.module.scss";
function PrivacyPolicy({ status }) {
  const router = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.pathname]);
  return (
    <div className={Styles.privacy__policy__main}>
      <div className={Styles.privacy__policy__child}>
        <div className={Styles.page_image_main}>
          <div className={Styles.page_image_child}>
            <img loading="lazy" alt="" src="./imgs/privay-policy.png" />
          </div>
        </div>
        <div className={Styles.main_text}>
          {status === "p" ? (
            <>
              <h1>
                <span>Privacy</span> Policy for The <span>Retro</span>
              </h1>
              <p>
                At The Retro, accessible at TheRetro.com, one of our main
                priorities is the privacy of our visitors. This Privacy Policy
                document contains types of information that is collected and
                recorded by The Retro and how we use it.
              </p>
              <br />
              <p>
                If you have additional questions or require more information
                about our Privacy Policy, do not hesitate to contact us through
                email at contact@theretro.com
              </p>
              <br />
              <p>
                This privacy policy applies only to our online activities and is
                valid for visitors to our website with regards to the
                information that they shared and/or collect in The Retro. This
                policy is not applicable to any information collected offline or
                via channels other than this website.
              </p>
              <br />
              <h2>Consent</h2>
              <p>
                By using our website, you hereby consent to our Privacy Policy
                and agree to its terms.
              </p>
              <br />
              <h2>Information we collect</h2>
              <p>
                The personal information that you are asked to provide, and the
                reasons why you are asked to provide it, will be made clear to
                you at the point we ask you to provide your personal information
              </p>{" "}
              <br />
              <p>
                If you contact us directly, we may receive additional
                information about you such as your name, email address, phone
                number, the contents of the message and/or attachments you may
                send us, and any other information you may choose to provide.
              </p>{" "}
              <br />
              <p>
                When you register for an Account, we may ask for your contact
                information, including items such as name, company name,
                address, email address, and telephone number.
              </p>{" "}
              <br />
              <h2>How we use your information</h2>
              <p>
                We use the information we collect in various ways, including to:
              </p>
              <ul>
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>
                  Develop new products, services, features, and functionality
                </li>
                <li>
                  Communicate with you, either directly or through one of our
                  partners, including for customer service, to provide you with
                  updates and other information relating to the website, and for
                  marketing and promotional purposes
                </li>
                <li>Send you emails</li>
                <li>Find and prevent fraud</li>
              </ul>
              <h2></h2>
              <p>
                The Retro follows a standard procedure of using log files. These
                files log visitors when they visit websites. All hosting
                companies do this and a part of hosting services{"'"} analytics.
                The information collected by log files include internet protocol
                (IP) addresses, browser type, Internet Service Provider (ISP),
                date and time stamp, referring/exit pages, and possibly the
                number of clicks. These are not linked to any information that
                is personally identifiable. The purpose of the information is
                for analyzing trends, administering the site, tracking users
                {"'"}
                movement on the website, and gathering demographic information.
              </p>
              <br />
              <h2>Cookies and Web Beacons</h2>
              <p>
                Like any other website, The Retro uses ‘cookies{"'"}. These
                cookies are used to store information including visitors{"'"}{" "}
                preferences, and the pages on the website that the visitor
                accessed or visited. The information is used to optimize the
                users{"'"}
                experience by customizing our web page content based on visitors
                {"'"} browser type and/or other information.
              </p>{" "}
              <br />
              <h2>Advertising Partners Privacy Policies</h2>
              <p>
                Google is one of a third-party vendor on our site. It also uses
                cookies, known as DART cookies, to serve ads to our site
                visitors based upon their visit to www.TheRetro.com and other
                sites on the internet. However, visitors may choose to decline
                the use of DART cookies by visiting the Google ad and content
                network Privacy Policy at the following URL – 
                <a href="https://policies.google.com/technologies/ads">
                  https://policies.google.com/technologies/ads
                </a>
                .
              </p>
              <br />
              <p>
                Some of advertisers on our site may use cookies and web beacons.
                Our advertising partners are listed below. Each of our
                advertising partners has their own Privacy Policy for their
                policies on user data. For easier access, we hyperlinked to
                their Privacy Policies below.
              </p>
              <br />
              <p>Google</p>
              <ul>
                <li>
                  <a href="https://policies.google.com/technologies/ads">
                    Google{"'"}s Policy
                  </a>
                </li>
              </ul>
              <h2> Third-Party Privacy Policies</h2>
              <p>
                The Retro{"'"}s Privacy Policy does not apply to other
                advertisers or websites. Thus, we are advising you to consult
                the respective Privacy Policies of these third-party ad servers
                for more detailed information. It may include their practices
                and instructions about how to opt-out of certain options. You
                may find a complete list of these Privacy Policies and their
                links here: Privacy Policy Links.
              </p>{" "}
              <br />
              <p>
                You can choose to disable cookies through your individual
                browser options. To know more detailed information about cookie
                management with specific web browsers, it can be found at the
                browsers{"'"} respective websites. What Are Cookies?
              </p>{" "}
              <br />
              <h2></h2>
              <p>
                Under the CCPA, among other rights, California consumers have
                the right to:
              </p>{" "}
              <br />
              <p>
                Request that a business that collects a consumer{"'"}s personal
                data disclose the categories and specific pieces of personal
                data that a business has collected about consumers
              </p>{" "}
              <br />
              <p>
                Request that a business delete any personal data about the
                consumer that a business has collected.
              </p>{" "}
              <br />
              <p>
                Request that a business that sells a consumer{"'"}s personal
                data, not sell the consumer{"'"}s personal data.
              </p>{" "}
              <br />
              <p>
                If you make a request, we have one month to respond to you. If
                you would like to exercise any of these rights, please contact
                us.
              </p>{" "}
              <br />
              <h2></h2>
              <p>
                We would like to make sure you are fully aware of all of your
                data protection rights. Every user is entitled to the following:
              </p>{" "}
              <br />
              <p>
                The right to access – You have the right to request copies of
                your personal data. We may charge you a small fee for this
                service.
              </p>{" "}
              <br />
              <p>
                The right to rectification – You have the right to request that
                we correct any information you believe is inaccurate. You also
                have the right to request that we complete the information you
                believe is incomplete.
              </p>{" "}
              <br />
              <p>
                The right to erasure – You have the right to request that we
                erase your personal data, under certain conditions.
              </p>{" "}
              <br />
              <p>
                The right to restrict processing – You have the right to request
                that we restrict the processing of your personal data, under
                certain conditions.
              </p>{" "}
              <br />
              <p>
                The right to object to processing – You have the right to object
                to our processing of your personal data, under certain
                conditions.
              </p>{" "}
              <br />
              <p>
                The right to data portability – You have the right to request
                that we transfer the data that we have collected to another
                organization, or directly to you, under certain conditions.
              </p>{" "}
              <br />
              <p>
                If you make a request, we have one month to respond to you. If
                you would like to exercise any of these rights, please contact
                us.
              </p>
              <br />
              <h2>Children{"'"}s Information</h2>
              <p>
                Another part of our priority is adding protection for children
                while using the internet. We encourage parents and guardians to
                observe, participate in, and/or monitor and guide their online
                activity.
              </p>{" "}
              <br />
              <p>
                The Retro does not knowingly collect any Personal Identifiable
                Information from children under the age of 13. If you think that
                your child provided this kind of information on our website, we
                strongly encourage you to contact us immediately and we will do
                our best efforts to promptly remove such information from our
                records.
              </p>{" "}
              <br />
            </>
          ) : (
            <>
              <h1>Terms and conditions</h1>
              <p>
                <b>Welcome to The Retro!</b>
              </p>
              <br />
              <p>
                These terms and conditions outline the rules and regulations for
                the use of The Retro{"'"}s Website, located at TheRetro.com.
              </p>
              <br />
              <p>
                By accessing this website we assume you accept these terms and
                conditions. Do not continue to use The Retro if you do not agree
                to take all of the terms and conditions stated on this page.
              </p>
              <br />
              <p>
                The following terminology applies to these Terms and Conditions,
                Privacy Statement and Disclaimer Notice and all Agreements:
                “Client”, “You” and “Your” refers to you, the person log on this
                website and compliant to the Company{"'"}s terms and conditions.
                “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our
                Company. “Party”, “Parties”, or “Us”, refers to both the Client
                and ourselves. All terms refer to the offer, acceptance and
                consideration of payment necessary to undertake the process of
                our assistance to the Client in the most appropriate manner for
                the express purpose of meeting the Client{"'"}s needs in respect
                of provision of the Company{"'"}s stated services, in accordance
                with and subject to, prevailing law of Netherlands. Any use of
                the above terminology or other words in the singular, plural,
                capitalization and/or he/she or they, are taken as
                interchangeable and therefore as referring to same.
              </p>
              <br />
              <h2>Cookies</h2>
              <p>
                We employ the use of cookies. By accessing The Retro, you agreed
                to use cookies in agreement with the The Retro{"'"}s Privacy
                Policy.
              </p>
              <br />
              <p>
                Most interactive websites use cookies to let us retrieve the
                user{"'"}s details for each visit. Cookies are used by our
                website to enable the functionality of certain areas to make it
                easier for people visiting our website. Some of our
                affiliate/advertising partners may also use cookies.
              </p>
              <br />
              <h2>License</h2>
              <p>
                Unless otherwise stated, The Retro and/or its licensors own the
                intellectual property rights for all material on The Retro. All
                intellectual property rights are reserved. You may access this
                from The Retro for your own personal use subjected to
                restrictions set in these terms and conditions.
              </p>
              <br />
              <p>You must not:</p>
              <br />
              <ul>
                <li>Republish material from The Retro</li>
                <li>Sell, rent or sub-license material from The Retro</li>
                <li>Reproduce, duplicate or copy material from The Retro</li>
                <li>Redistribute content from The Retro</li>
              </ul>
              <p>This Agreement shall begin on the date hereof.</p> <br />
              <p>
                Parts of this website offer an opportunity for users to post and
                exchange opinions and information in certain areas of the
                website. The Retro does not filter, edit, publish or review
                Comments prior to their presence on the website. Comments do not
                reflect the views and opinions of The Retro,its agents and/or
                affiliates. Comments reflect the views and opinions of the
                person who post their views and opinions. To the extent
                permitted by applicable laws, The Retro shall not be liable for
                the Comments or for any liability, damages or expenses caused
                and/or suffered as a result of any use of and/or posting of
                and/or appearance of the Comments on this website.
              </p>{" "}
              <br />
              <p>
                The Retro reserves the right to monitor all Comments and to
                remove any Comments which can be considered inappropriate,
                offensive or causes breach of these Terms and Conditions.
              </p>{" "}
              <br />
              <p>You warrant and represent that:</p> <br />
              <ul>
                <li>
                  You are entitled to post the Comments on our website and have
                  all necessary licenses and consents to do so;
                </li>
                <li>
                  The Comments do not invade any intellectual property right,
                  including without limitation copyright, patent or trademark of
                  any third party;
                </li>
                <li>
                  The Comments do not contain any defamatory, libelous,
                  offensive, indecent or otherwise unlawful material which is an
                  invasion of privacy
                </li>
                <li>
                  The Comments will not be used to solicit or promote business
                  or custom or present commercial activities or unlawful
                  activity.
                </li>
              </ul>
              <p>
                You hereby grant The Retro a non-exclusive license to use,
                reproduce, edit and authorize others to use, reproduce and edit
                any of your Comments in any and all forms, formats or media.
              </p>
              <br />
              <h2>Hyperlinking to our Content</h2>
              <p>
                The following organizations may link to our Website without
                prior written approval:
              </p>{" "}
              <br />
              <ul>
                <li>Government agencies;</li>
                <li>Search engines;</li>
                <li>News organizations;</li>
                <li>
                  Online directory distributors may link to our Website in the
                  same manner as they hyperlink to the Websites of other listed
                  businesses; and
                </li>
                <li>
                  System wide Accredited Businesses except soliciting non-profit
                  organizations, charity shopping malls, and charity fundraising
                  groups which may not hyperlink to our Web site.
                </li>
              </ul>
              <br />
              <p>
                These organizations may link to our home page, to publications
                or to other Website information so long as the link: (a) is not
                in any way deceptive; (b) does not falsely imply sponsorship,
                endorsement or approval of the linking party and its products
                and/or services; and (c) fits within the context of the linking
                party{"'"}s site.
              </p>{" "}
              <br />
              <p>
                We may consider and approve other link requests from the
                following types of organizations:
              </p>
              <br />
              <ul>
                <li>
                  commonly-known consumer and/or business information sources;
                </li>
                <li>dot.com community sites;</li>
                <li>associations or other groups representing charities;</li>
                <li>online directory distributors;</li>
                <li>internet portals;</li>
                <li>accounting, law and consulting firms; and</li>
                <li>educational institutions and trade associations.</li>
              </ul>
              <br />
              <p>
                We will approve link requests from these organizations if we
                decide that: (a) the link would not make us look unfavorably to
                ourselves or to our accredited businesses; (b) the organization
                does not have any negative records with us; (c) the benefit to
                us from the visibility of the hyperlink compensates the absence
                of The Retro; and (d) the link is in the context of general
                resource information.
              </p>
              <br />
              <p>
                These organizations may link to our home page so long as the
                link: (a) is not in any way deceptive; (b) does not falsely
                imply sponsorship, endorsement or approval of the linking party
                and its products or services; and (c) fits within the context of
                the linking party{"'"}s site.
              </p>
              <br />
              <p>
                If you are one of the organizations listed in paragraph 2 above
                and are interested in linking to our website, you must inform us
                by sending an e-mail to The Retro. Please include your name,
                your organization name, contact information as well as the URL
                of your site, a list of any URLs from which you intend to link
                to our Website, and a list of the URLs on our site to which you
                would like to link. Wait 2-3 weeks for a response.
              </p>
              <br />
              <p>
                Approved organizations may hyperlink to our Website as follows:
              </p>
              <br />
              <ul>
                <li>By use of our corporate name; or</li>
                <li>
                  By use of the uniform resource locator being linked to; or
                </li>
                <li>
                  By use of any other description of our Website being linked to
                  that makes sense within the context and format of content on
                  the linking party{"'"}s site.
                </li>
              </ul>{" "}
              <br />
              <p>
                No use of The Retro{"'"}s logo or other artwork will be allowed
                for linking absent a trademark license agreement.
              </p>
              <h2>iFrames</h2>
              <p>
                Without prior approval and written permission, you may not
                create frames around our Webpages that alter in any way the
                visual presentation or appearance of our Website.
              </p>
              <br />
              <h2>Content Liability</h2>
              <p>
                We shall not be hold responsible for any content that appears on
                your Website. You agree to protect and defend us against all
                claims that is rising on your Website. No link(s) should appear
                on any Website that may be interpreted as libelous, obscene or
                criminal, or which infringes, otherwise violates, or advocates
                the infringement or other violation of, any third party rights.
              </p>{" "}
              <br />
              <h2>Reservation of Rights</h2>
              <p>
                We reserve the right to request that you remove all links or any
                particular link to our Website. You approve to immediately
                remove all links to our Website upon request. We also reserve
                the right to amen these terms and conditions and it{"'"}s
                linking policy at any time. By continuously linking to our
                Website, you agree to be bound to and follow these linking terms
                and conditions.
              </p>{" "}
              <br />
              <h2>Removal of links from our website</h2>
              <p>
                If you find any link on our Website that is offensive for any
                reason, you are free to contact and inform us any moment. We
                will consider requests to remove links but we are not obligated
                to or so or to respond to you directly.
              </p>{" "}
              <br />
              <p>
                We do not ensure that the information on this website is
                correct, we do not warrant its completeness or accuracy; nor do
                we promise to ensure that the website remains available or that
                the material on the website is kept up to date.
              </p>{" "}
              <br />
              <h2>Disclaimer</h2>
              <p>
                To the maximum extent permitted by applicable law, we exclude
                all representations, warranties and conditions relating to our
                website and the use of this website. Nothing in this disclaimer
                will:
              </p>{" "}
              <br />
              <ul>
                <li>
                  limit or exclude our or your liability for death or personal
                  injury;
                </li>
                <li>
                  limit or exclude our or your liability for fraud or fraudulent
                  misrepresentation;
                </li>
                <li>
                  limit any of our or your liabilities in any way that is not
                  permitted under applicable law; or
                </li>
                <li>
                  exclude any of our or your liabilities that may not be
                  excluded under applicable law.
                </li>
              </ul>{" "}
              <br />
              <p>
                The limitations and prohibitions of liability set in this
                Section and elsewhere in this disclaimer: (a) are subject to the
                preceding paragraph; and (b) govern all liabilities arising
                under the disclaimer, including liabilities arising in contract,
                in tort and for breach of statutory duty.
              </p>
              <br />
              <p>
                As long as the website and the information and services on the
                website are provided free of charge, we will not be liable for
                any loss or damage of any nature.
              </p>{" "}
              <br />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
