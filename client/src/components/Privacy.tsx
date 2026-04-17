

const PrivacyComponent = () => {




    const privacyText = `Privacy Policy

Last Updated: April 17, 2026

We value your privacy and are committed to protecting your personal information.

1. Information We Collect
• Name and contact information
• Account credentials
• Payment information
• Communications with us

2. How We Use Your Information
• Provide and improve services
• Process transactions
• Send updates
• Respond to inquiries

3. Data Security
We implement safeguards against unauthorized access.

4. Your Rights
• Access data
• Request correction
• Request deletion
• Opt-out of marketing

5. Third-Party Services
We may share data with trusted providers.

6. Cookies
Used to enhance your experience.

7. Changes
Policy may be updated periodically.

8. Contact
Email: privacy@example.com`;








    return (
        <div

            style={{
                maxWidth: "800px",
                margin: "40px auto",
                padding: "24px",
                background: "#fff200",
                border: "3px solid black",
                boxShadow: "8px 8px 0px black",
                fontFamily: "Arial, sans-serif",
                color: "black",
            }}
        >

            <h1
                style={{
                    fontSize: "28px",
                    fontWeight: "900",
                    marginBottom: "16px",
                    borderBottom: "3px solid black",
                    paddingBottom: "8px",
                }}
            >
                PRIVACY POLICY
            </h1>


            <div
                style={{
                    whiteSpace: "pre-wrap",
                    fontSize: "16px",
                    lineHeight: "24px",
                }}
            >
                {privacyText}
            </div>



        </div>
    );
};

export default PrivacyComponent;