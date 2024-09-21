import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction } from '@/components/ui/alert-dialog';

const NewMessage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [message, setMessage] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const navigate = useNavigate();

  const generateOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    setMessage(`Hi. Your OTP is: ${otp}`);
  };

  const handleSend = async () => {
    try {
      const response = await axios.post(`http://localhost:3000/api/send-otp`, {
        contactId: parseInt(id!),
        customMessage: message,
      });
      setDialogMessage(response.data.message || 'Message sent successfully!');
      setIsDialogOpen(true);
    } catch (error) {
      console.error('Error sending message:', error);
      setDialogMessage('Failed to send message. Please try again.');
      setIsDialogOpen(true);
    }
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    if (dialogMessage.includes('successfully')) {
      navigate(`/contact/${id}`);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Compose Message</h2>
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="You can customize your message here..."
        className="mb-4"
      />
      <div className="flex space-x-2">
        <Button onClick={generateOTP} variant="outline">Generate OTP</Button>
        <Button onClick={handleSend}>Send</Button>
      </div>
      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Message Status</AlertDialogTitle>
            <AlertDialogDescription>{dialogMessage}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleDialogClose}>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default NewMessage;