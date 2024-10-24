import React from 'react';
import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import './AlertUnderConstruction.css';

const AlertUnderConstruction: React.FC = () => {
    return (
        <div className='container'>
            <Alert className="custom-alert">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Oops! We’re Under Construction!</AlertTitle>
                <AlertDescription>
                    Just like a fine wine, great things take time! 🛠️
                    I’m busy tweaking and tuning this page to make it absolutely fabulous.
                    Stay tuned for a delightful experience! 🎉
                </AlertDescription>
            </Alert>
        </div>
    );
};

export default AlertUnderConstruction;
