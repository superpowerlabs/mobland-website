import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Markdown from "react-markdown-it";

function Privacy() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // const nbsp = ` `;

  const source = `
# MOBLAND Global Privacy Policy

Last Updated: October 2022

MOBLAND (hereinafter, “MOBLAND”, “we”, “us” and “our”) values your privacy. This Privacy Policy (“Privacy Policy”) applies to the information we collect via our website located at mob.land and *.mob.land; (the “Site”) and to the information we collect via our apps and games (the “Apps”). The purpose of this Privacy Policy is to provide you with information concerning how we collect, use, maintain, and share your personal information in accordance with applicable data protection laws.

Personal information is processed by or on behalf of the data controller:

MOBLAND HOLDS PTE. LTD.${"  "}
SOME STREET, SOME BUILDING${"  "}
SINGAPORE (069539)

## Information We Collect and Process

We collect the following personal information about the visitors to our Site; users of our Apps; our business partners; and our potential business partners when these individuals (i) visit our Site; (ii) register for or use our Apps; (iii) request additional information about our Site and/or Apps; or (iv) otherwise contact or interact with us on the Site or via the Apps.

| Category of Personal Information Collected | Examples | Sources of Personal Information | Business Purpose for Collection of Personal Information |
| --- | --- | --- | --- |
| Identifiers | Name, Business Contact Information, including Email Address, Company Name, Job Title, Online Identifiers/Social Media Account/Login & Password. | Directly from the users of our Site and Apps. | Identification, communications, security, legal issues/compliance |
| Financial Information | Banking Account Information; Web3 Wallet Address; Metamask Identification, Other Crypto Wallet Identifiers. | Directly from the users of our Site and Apps. | Identification, communications, security, legal issues/compliance |
 | Commercial Information | Records of personal property, products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies. | Directly from the users of our Site and Apps. | Identification, communications, security, legal issues/compliance |

We process this personal information as necessary for us:

* To provide our Site and Apps to our users, potential users, partners, potential partners, and visitors;
* To fulfill our legitimate interests, including to manage our business operations; to take steps to prevent, detect or investigate crime, fraud, misconduct or any unlawful action or omission; to comply with policies and procedures under applicable regulations, guidelines or notices as well as our own policies and procedures;
* To inform you of updates to our Site, information regarding our Apps, and other relevant news; and
* For other purposes with notice to you and with your consent where necessary.

Other Automatically Collected Information: Whether you are a visitor to our Site, user of Apps, partner or potential partner, our servers automatically collect limited information about your computer when you visit our Site. This information may include the type of browser software you use, the operating system you are running, the IP address assigned to your computer or Internet connection, and the IP address of the website, if any, that referred you to our Site. We use this information to understand how visitors navigate through our Site, to enhance your experience while using our Site, and to make the materials we post as valuable to visitors as possible.

Legitimate Interests/Consent: To the extent we rely on our legitimate interests as a legal basis for processing of your personal information, we have considered the balance between our own interests (among other things, the lawful and efficient operation of our Site and Apps) and your interests and we believe that (a) you would reasonably expect us to carry out the kind of processing referenced above and (b) such processing will not cause you any harm and/or will not seriously impact your rights and freedoms with regard to data privacy. You have the right to withdraw any consent given to us for the processing of your personal information.

Collection of Non-Personal Information: We may collect certain information from you in order to play our Apps, including your cryptocurrency wallet address. For the purposes of this Privacy Policy, this type of information is not considered personal information.

## Disclosures of Personal Information

In order for us to provide our Site and Apps, we may share your personal information with the following categories of recipients:

* Service Providers, including those who work to enhance our Site or Apps and to protect the security of our systems.
* Partners, including to provide our Site and Apps to you.
* Legal/Regulatory Authorities, including to respond to a subpoena or court order, judicial process, or regulatory inquiry; to defend against fraud, lawsuits, claims or other liabilities; and to prevent physical harm or financial loss in connection with any suspected or actual illegal activity.

## Cross-Border Transfers

We may transfer your personal information to a third party that is located in a jurisdiction other than the one from which we collected your personal information, including to countries that have not been deemed to have an adequate level of protection for the rights and freedoms of data subjects. If we do transfer your personal information to another jurisdiction, we will do so following due diligence and provided that the data recipient is subject to contractual agreements imposing obligations on it to ensure appropriate technical and organization measures are implemented and maintained at all times to prevent the unauthorized and unlawful processing of personal information, and the accidental loss or destruction of, or damage to, personal information, consistent with our obligations under applicable data protection laws.

## Retention of Personal Information

We will only retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, regulatory, accounting, or reporting requirements. If we collect any biometric information about you, we will not store that information for longer than 3 years.

## Security of Personal Information

The security of all personal information provided to us is important and we take reasonable steps designed to protect your personal information. We maintain reasonable administrative, technical, and physical safeguards designed to protect personal information that we receive against accidental, unlawful, or unauthorized destruction, loss, alteration, access, disclosure or use.

## Your Choices & Rights

Depending upon where you are located, certain choices and rights may be available to you under applicable data protection laws, including the right to request access to your personal information or to have your personal information deleted. If you have questions about what rights may apply to you, please contact us at privacy@superpower.io

For Individuals Located in the European Economic Area (EEA), the United Kingdom (UK) or Switzerland:

You have a number of rights under applicable data protection laws in relation to your personal information. Under certain circumstances, you have the right to:

* Have access to your personal information by submitting a request to us;
* Have your personal information deleted;
* Have your personal information corrected if it is wrong;
* Have the processing of your personal information restricted;
* Object to further processing of your personal information, including to object to marketing from us;
* Make a data portability request;
* Withdraw any consent you have provided to us;
* Restrict any automatic processing of your personal information; and
* Complain to the appropriate Supervisory Authority.

## Third-Party Links

We may provide links to other sites or resources provided by third parties. These links are provided for your convenience only. We have no control over the contents of those sites or resources, and accept no responsibility for them or for any loss or damage that may arise from your use of them. If you decide to access any of the third-party links on the Site, you do so entirely at your own risk and subject to the terms and conditions of those sites.

## Children

We do not knowingly collect personal information from children under the age of 13 through our Site. If you are under 13, please do not give us any personal information. We encourage parents and legal guardians to monitor their children’s internet usage and to help enforce our Privacy Policy by instructing their children never to provide us personal information. If you have reason to believe that a child under the age of 13 has provided personal information to us, please contact us, and we will endeavor to delete that personal information from our databases.

## Changes to this Privacy Policy

This Privacy Policy is effective as of the date stated at the top of this page. We may change this Privacy Policy from time to time. By accessing and using the Site after we notify you of such changes to this Privacy Policy, you are deemed to have accepted such changes. Please refer back to this Privacy Policy on a regular basis.

## Contact Us

If you have any questions regarding this Privacy Policy or our privacy practices, please contact us at privacy@mob.land.

If you are located in the European Economic Area (EEA), the United Kingdom (UK) or Switzerland and believe we have not adequately resolved any issues, you may contact the Supervisory Authority concerned.
 `;

  return (
    <div className="container centered padded">
      <div className={"legalDocs light"}>
        <Markdown source={source} />
      </div>
    </div>
  );
}

export default Privacy;
