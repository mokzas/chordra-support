import { useEffect } from "react";
import styled from "styled-components";
import Container from "../../common/Container";

const PrivacySection = styled.section`
  padding: 4rem 0;
  min-height: calc(100vh - 300px);
`;

const Title = styled.h1`
  margin-bottom: 2.5rem;
  color: #2E186A;
  font-size: 3rem;
  text-align: center;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  color: #18216d;
`;

const Paragraph = styled.p`
  margin-bottom: 2rem;
  font-size: 1.1rem;
  color: #18216d;
  opacity: 0.8;
`;

const List = styled.ul`
  margin-bottom: 2rem;
  padding-left: 2rem;
  font-size: 1.1rem;
  color: #18216d;
  opacity: 0.8;
`;

const ListItem = styled.li`
  margin-bottom: 0.75rem;
  line-height: 1.6;
`;

const SubTitle = styled.h2`
  margin: 3rem 0 1.5rem;
  color: #2E186A;
  font-size: 2rem;
`;

const EmailLink = styled.a`
  color: #2E186A;
  text-decoration: none;
  border-bottom: 1px solid #2E186A;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;

const LastUpdated = styled(Paragraph)`
  margin-top: 4rem;
  font-style: italic;
  text-align: center;
  font-size: 0.9rem;
`;

const PrivacyEn = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container>
            <PrivacySection>
                <Title>Privacy Policy</Title>
                <Content>
                    <Paragraph>
                        We respect your privacy and are committed to protecting it through our compliance with this privacy
                        policy {"("}Policy{")"}. This Policy describes the types of information we may collect from you or that
                        you may provide {"("}Personal Information{")"} in the {"\""}Chordra{"\""} mobile application {"("}Mobile Application{"\""}
                        or {"\""}Service{"\""}{")"} and any of its related products and services {"("}collectively, {"\""}Services{"\""}{")"}, and our
                        practices for collecting, using, maintaining, protecting, and disclosing that Personal Information.
                        It also describes the choices available to you regarding our use of your Personal Information and
                        how you can access and update it.
                    </Paragraph>

                    <Paragraph>
                        This Policy is a legally binding agreement between you {"("}{"\""}User{"\""}, {"\""}you{"\""} or {"\""}your{"\""}{")"} and this Mobile
                        Application developer {"("}{"\""}Operator{"\""}, {"\""}we{"\""}, {"\""}us{"\""} or {"\""}our{"\""}{")"}. If you are entering into this Policy on
                        behalf of a business or other legal entity, you represent that you have the authority to bind such
                        entity to this Policy, in which case the terms {"\""}User{"\""}, {"\""}you{"\""} or {"\""}your{"\""} shall refer to such entity.
                        If you do not have such authority, or if you do not agree with the terms of this Policy, you must
                        not accept this Policy and may not access and use the Mobile Application and Services. By accessing
                        and using the Mobile Application and Services, you acknowledge that you have read, understood, and
                        agree to be bound by the terms of this Policy. This Policy does not apply to the practices of
                        companies that we do not own or control, or to individuals that we do not employ or manage.
                    </Paragraph>

                    <SubTitle>Collection of information</SubTitle>
                    <Paragraph>
                        Our top priority is customer data security and, as such, we exercise the no logs policy. We may
                        process only minimal user data, only as much as it is absolutely necessary to maintain the Mobile
                        Application and Services. Information collected automatically is used only to identify potential
                        cases of abuse and establish statistical information regarding the usage of the Mobile Application
                        and Services. This statistical information is not otherwise aggregated in such a way that would
                        identify any particular user of the system.
                    </Paragraph>

                    <SubTitle>Use and processing of collected information</SubTitle>
                    <Paragraph>
                        We act as a data controller and a data processor when handling Personal Information, unless we have
                        entered into a data processing agreement with you in which case you would be the data controller and
                        we would be the data processor.
                    </Paragraph>

                    <Paragraph>
                        Our role may also differ depending on the specific situation involving Personal Information. We act
                        in the capacity of a data controller when we ask you to submit your Personal Information that is
                        necessary to ensure your access and use of the Mobile Application and Services. In such instances,
                        we are a data controller because we determine the purposes and means of the processing of Personal
                        Information.
                    </Paragraph>

                    <Paragraph>
                        We act in the capacity of a data processor in situations when you submit Personal Information through
                        the Mobile Application and Services. We do not own, control, or make decisions about the submitted
                        Personal Information, and such Personal Information is processed only in accordance with your
                        instructions. In such instances, the User providing Personal Information acts as a data controller.
                    </Paragraph>

                    <Paragraph>
                        In order to make the Mobile Application and Services available to you, or to meet a legal obligation,
                        we may need to collect and use certain Personal Information. If you do not provide the information
                        that we request, we may not be able to provide you with the requested products or services. Any of
                        the information we collect from you may be used for the following purposes:
                    </Paragraph>

                    <List>
                        <ListItem>Improve user experience</ListItem>
                        <ListItem>Run and operate the Mobile Application and Services</ListItem>
                    </List>

                    <Paragraph>
                        Processing your Personal Information depends on how you interact with the Mobile Application and
                        Services, where you are located in the world and if one of the following applies: {"("}a{")"} you have given
                        your consent for one or more specific purposes; {"("}b{")"} provision of information is necessary for the
                        performance of this Policy with you and/or for any pre-contractual obligations thereof; {"("}c{")"}
                        processing is necessary for compliance with a legal obligation to which you are subject; {"("}d{")"}
                        processing is related to a task that is carried out in the public interest or in the exercise of
                        official authority vested in us; {"("}e{")"} processing is necessary for the purposes of the legitimate
                        interests pursued by us or by a third party.
                    </Paragraph>

                    <Paragraph>
                        Note that under some legislations we may be allowed to process information until you object to such
                        processing by opting out, without having to rely on consent or any other of the legal bases. In any
                        case, we will be happy to clarify the specific legal basis that applies to the processing, and in
                        particular whether the provision of Personal Information is a statutory or contractual requirement,
                        or a requirement necessary to enter into a contract.
                    </Paragraph>

                    <SubTitle>Disclosure of information</SubTitle>
                    <Paragraph>
                        Depending on the requested Services or as necessary to complete any transaction or provide any
                        Service you have requested, we may share your non-personally identifiable information with our
                        contracted companies, and service providers {"("}collectively, {"\""}Service Providers{"\""}{")"} we rely upon to
                        assist in the operation of the Mobile Application and Services available to you and whose privacy
                        policies are consistent with ours or who agree to abide by our policies with respect to your
                        information. We will not share any information with unaffiliated third parties.
                    </Paragraph>

                    <Paragraph>
                        Service Providers are not authorized to use or disclose your information except as necessary to
                        perform services on our behalf or comply with legal requirements. Service Providers are given the
                        information they need only in order to perform their designated functions, and we do not authorize
                        them to use or disclose any of the provided information for their own marketing or other purposes.
                    </Paragraph>

                    <SubTitle>Retention of information</SubTitle>
                    <Paragraph>
                        We will retain and use your Personal Information for the period necessary to comply with our legal
                        obligations, to enforce our Policy, resolve disputes, and unless a longer retention period is
                        required or permitted by law.
                    </Paragraph>

                    <Paragraph>
                        We may use any aggregated data derived from or incorporating your Personal Information after you
                        update or delete it, but not in a manner that would identify you personally. Once the retention
                        period expires, Personal Information shall be deleted. Therefore, the right to access, the right to
                        erasure, the right to rectification, and the right to data portability cannot be enforced after the
                        expiration of the retention period.
                    </Paragraph>

                    <SubTitle>Data analytics</SubTitle>
                    <Paragraph>
                        Our Mobile Application and Services may use third-party analytics tools that use cookies, web
                        beacons, or other similar information-gathering technologies to collect standard internet activity
                        and usage information. The information gathered is used to compile statistical reports on User
                        activity such as how often Users visit our Mobile Application and Services, what pages they visit
                        and for how long, etc. We use the information obtained from these analytics tools to monitor the
                        performance and improve our Mobile Application and Services. We do not use third-party analytics
                        tools to track or to collect any personally identifiable information of our Users and we will not
                        associate any information gathered from the statistical reports with any individual User.
                    </Paragraph>

                    <SubTitle>Privacy of children</SubTitle>
                    <Paragraph>
                        We do not knowingly collect any Personal Information from children under the age of 13. If you are
                        under the age of 13, please do not submit any Personal Information through the Mobile Application
                        and Services. If you have reason to believe that a child under the age of 13 has provided Personal
                        Information to us through the Mobile Application and Services, please contact us to request that we
                        delete that child's Personal Information from our Services.
                    </Paragraph>

                    <Paragraph>
                        We encourage parents and legal guardians to monitor their children's Internet usage and to help
                        enforce this Policy by instructing their children never to provide Personal Information through the
                        Mobile Application and Services without their permission. We also ask that all parents and legal
                        guardians overseeing the care of children take the necessary precautions to ensure that their
                        children are instructed to never give out Personal Information when online without their permission.
                    </Paragraph>

                    <SubTitle>Links to other resources</SubTitle>
                    <Paragraph>
                        The Mobile Application and Services contain links to other resources that are not owned or controlled
                        by us. Please be aware that we are not responsible for the privacy practices of such other resources
                        or third parties. We encourage you to be aware when you leave the Mobile Application and Services
                        and to read the privacy statements of each and every resource that may collect Personal Information.
                    </Paragraph>

                    <SubTitle>Information security</SubTitle>
                    <Paragraph>
                        We secure information you provide on computer servers in a controlled, secure environment, protected
                        from unauthorized access, use, or disclosure. We maintain reasonable administrative, technical, and
                        physical safeguards in an effort to protect against unauthorized access, use, modification, and
                        disclosure of Personal Information in our control and custody. However, no data transmission over
                        the Internet or wireless network can be guaranteed.
                    </Paragraph>

                    <Paragraph>
                        Therefore, while we strive to protect your Personal Information, you acknowledge that {"("}a{")"} there are
                        security and privacy limitations of the Internet which are beyond our control; {"("}b{")"} the security,
                        integrity, and privacy of any and all information and data exchanged between you and the Mobile
                        Application and Services cannot be guaranteed; and {"("}c{")"} any such information and data may be viewed
                        or tampered with in transit by a third party, despite best efforts.
                    </Paragraph>

                    <SubTitle>Data breach</SubTitle>
                    <Paragraph>
                        In the event we become aware that the security of the Mobile Application and Services has been
                        compromised or Users' Personal Information has been disclosed to unrelated third parties as a result
                        of external activity, including, but not limited to, security attacks or fraud, we reserve the right
                        to take reasonably appropriate measures, including, but not limited to, investigation and reporting,
                        as well as notification to and cooperation with law enforcement authorities.
                    </Paragraph>

                    <Paragraph>
                        In the event of a data breach, we will make reasonable efforts to notify affected individuals if we
                        believe that there is a reasonable risk of harm to the User as a result of the breach or if notice
                        is otherwise required by law. When we do, we will post a notice in the Mobile Application. In
                        jurisdictions where required, we may also report the breach to relevant authorities in accordance
                        with applicable data protection regulations.
                    </Paragraph>

                    <SubTitle>Changes and amendments</SubTitle>
                    <Paragraph>
                        We reserve the right to modify this Policy or its terms related to the Mobile Application and
                        Services at any time at our discretion. When we do, we will revise the updated date at the bottom of
                        this page. We may also provide notice to you in other ways at our discretion, such as through the
                        contact information you have provided.
                    </Paragraph>

                    <Paragraph>
                        An updated version of this Policy will be effective immediately upon the posting of the revised
                        Policy unless otherwise specified. Your continued use of the Mobile Application and Services after
                        the effective date of the revised Policy {"("}or such other act specified at that time{")"} will constitute
                        your consent to those changes. However, we will not, without your consent, use your Personal
                        Information in a manner materially different than what was stated at the time your Personal
                        Information was collected.
                    </Paragraph>

                    <SubTitle>Acceptance of this policy</SubTitle>
                    <Paragraph>
                        You acknowledge that you have read this Policy and agree to all its terms and conditions. By
                        accessing and using the Mobile Application and Services and submitting your information you agree to
                        be bound by this Policy. If you do not agree to abide by the terms of this Policy, you are not
                        authorized to access or use the Mobile Application and Services.
                    </Paragraph>

                    <SubTitle>Contacting us</SubTitle>
                    <Paragraph>
                        If you have any questions, concerns, or complaints regarding this Policy, the information we hold
                        about you, or if you wish to exercise your rights, we encourage you to contact us using the details
                        below:
                    </Paragraph>

                    <Paragraph>
                        <EmailLink href="mailto:jaeiklee.dev@gmail.com">jaeiklee.dev@gmail.com</EmailLink>
                    </Paragraph>

                    <Paragraph>
                        We will attempt to resolve complaints and disputes and make every reasonable effort to honor your
                        wish to exercise your rights as quickly as possible and in any event, within the timescales provided
                        by applicable data protection laws.
                    </Paragraph>

                    <Paragraph>
                        If you believe your concerns have not been adequately addressed, you may escalate the matter to the
                        appropriate data protection authority in your region, in accordance with applicable privacy laws.
                    </Paragraph>

                    <LastUpdated>
                        This document was last updated on May 2, 2025
                    </LastUpdated>
                </Content>
            </PrivacySection>
        </Container>
    );
};

export default PrivacyEn; 