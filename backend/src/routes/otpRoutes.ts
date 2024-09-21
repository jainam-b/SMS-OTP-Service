import { Router, Request, Response } from 'express';
import { sendOtp } from './smsService'; // Twilio integration
import { contacts, messages } from './data'; // In-memory data

const router = Router();

// Get all contacts
router.get('/contacts', (req: Request, res: Response) => {
  res.json(contacts);
});

router.get('/contacts/:id', (req: Request, res: Response) => {
  const contactId = parseInt(req.params.id);
  const contact = contacts.find((c) => c.id === contactId);

  if (contact) {
    res.json(contact);
  } else {
    res.status(404).json({ message: 'Contact not found' });
  }
});

// Send OTP to contact
router.post('/send-otp', async (req: Request, res: Response) => {
  const { contactId, customMessage } = req.body; // Expect both contactId and customMessage

  const contact = contacts.find((c) => c.id === contactId);
  if (!contact) {
    return res.status(404).json({ error: 'Contact not found' });
  }



  try {
    const messageSid = await sendOtp(contact.phone, customMessage ); // Send custom message with OTP
    res.json({ success: true, customMessage, messageSid });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get sent messages
router.get('/messages', (req: Request, res: Response) => {
  res.json(messages.sort((a, b) => b.time.getTime() - a.time.getTime()));
});

export default router;
