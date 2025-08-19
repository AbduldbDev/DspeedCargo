<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Message</title>
</head>

<body style="margin:0; padding:0; background-color:#f9fafb; font-family: Arial, sans-serif;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
        <tr>
            <td align="center" style="padding: 40px 0;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600"
                    style="background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                    <!-- Header -->
                    <tr>
                        <td align="center" style="background: #16341f; padding: 20px;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 22px;"> New Contact Message</h1>
                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td style="padding: 30px; color: #374151;">
                            <p style="font-size: 16px; margin-bottom: 15px;">Hello Admin,</p>
                            <p style="font-size: 14px; margin-bottom: 10px;">You’ve received a new contact request from
                                your website.</p>

                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                style="margin: 20px 0; font-size: 14px; color: #111827;">
                                <tr>
                                    <td style="padding: 8px; font-weight: bold; width: 120px;">Name:</td>
                                    <td style="padding: 8px;"> {{ $data['name'] }}</td>
                                </tr>
                                <tr style="background: #f3f4f6;">
                                    <td style="padding: 8px; font-weight: bold;">Email:</td>
                                    <td style="padding: 8px;"> {{ $data['email'] }}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px; font-weight: bold;">Phone:</td>
                                    <td style="padding: 8px;"> {{ $data['number'] }}</td>
                                </tr>
                                <tr style="background: #f3f4f6;">
                                    <td style="padding: 8px; font-weight: bold;">Message:</td>
                                    <td style="padding: 8px;"> {{ $data['message'] }}</td>
                                </tr>
                            </table>

                            <p style="font-size: 14px; margin-top: 20px;">Best regards,<br><strong>Your Website</strong>
                            </p>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td align="center" style="background: #f3f4f6; padding: 15px; font-size: 12px; color: #6b7280;">
                            &copy; {{ date('Y') }} DSpeedCargo. All rights reserved.
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
