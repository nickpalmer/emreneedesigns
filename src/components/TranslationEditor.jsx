import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const TranslationEditor = () => {
  // Check if domain contains "nick.codes" or is localhost
  const shouldShowEditor = window.location.hostname.includes('nick.codes') ||
                           window.location.hostname === 'localhost' ||
                           window.location.hostname === '127.0.0.1';

  const [isOpen, setIsOpen] = useState(false);
  const [activeKey, setActiveKey] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [showEditDialog, setShowEditDialog] = useState(false);
  const { t, i18n } = useTranslation();

  if (!shouldShowEditor) {
    return null;
  }

  const translations = i18n.getResourceBundle('en', 'translation') || {};

  const translationSections = [
    {
      title: 'Home Page',
      keys: [
        'home.hero.title',
        'home.hero.description1',
        'home.hero.description2'
      ]
    },
    {
      title: 'About Page',
      keys: [
        'about.title',
        'about.tagline',
        'about.intro',
        'about.paragraph1',
        'about.paragraph2',
        'about.paragraph3',
        'about.paragraph4'
      ]
    },
    {
      title: 'Designs Page',
      keys: [
        'designs.title',
        'designs.subtitle',
        'designs.description',
        'designs.product1',
        'designs.product2',
        'designs.product3',
        'designs.product4',
        'designs.product5',
        'designs.product6'
      ]
    },
    {
      title: 'Custom Page',
      keys: [
        'custom.title',
        'custom.tagline',
        'custom.subtitle',
        'custom.motto',
        'custom.description',
        'custom.cta',
        'custom.cta.link'
      ]
    },
    {
      title: 'Contact Page',
      keys: [
        'contact.title',
        'contact.email.label',
        'contact.phone.label',
        'contact.location.label',
        'contact.location.value',
        'contact.hours.label',
        'contact.hours.value',
        'contact.social.label'
      ]
    },
    {
      title: 'Navigation & Footer',
      keys: [
        'nav.home',
        'nav.about',
        'nav.designs',
        'nav.custom',
        'nav.contact',
        'footer.copyright'
      ]
    }
  ];

  const handleEdit = (key) => {
    setActiveKey(key);
    setEditValue(t(key));
    setShowEditDialog(true);
  };

  const handleSave = () => {
    if (activeKey) {
      // Update the translation in memory
      i18n.addResource('en', 'translation', activeKey, editValue);
      setShowEditDialog(false);
      setActiveKey(null);
      setEditValue('');
    }
  };

  const exportTranslations = () => {
    const json = JSON.stringify(translations, null, 2);
    navigator.clipboard.writeText(json);
    alert('Translations copied to clipboard! You can now paste them into an email or file.');
  };

  const importTranslations = () => {
    const jsonText = prompt('Paste the JSON translations here:');
    if (!jsonText) return;

    try {
      const imported = JSON.parse(jsonText);

      // Update all translations
      Object.keys(imported).forEach(key => {
        i18n.addResource('en', 'translation', key, imported[key]);
      });

      alert('Translations imported successfully!');
      // Force re-render by closing and opening the dialog
      setIsOpen(false);
      setTimeout(() => setIsOpen(true), 100);
    } catch (error) {
      alert('Error parsing JSON: ' + error.message);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '90px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#012169',
          color: '#F5E6D3',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          fontSize: '24px',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        📝
      </button>

      {/* Translation Editor Dialog */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            maxWidth: '90vw',
            width: '900px',
            maxHeight: '80vh',
            overflowY: 'auto',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
            zIndex: 1001,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ margin: 0, color: '#333' }}>Translation Editor</h2>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#666',
              }}
            >
              ✕
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
            {translationSections.map((section) => (
              <div key={section.title}>
                <h3 style={{ marginBottom: '12px', color: '#555', fontSize: '16px' }}>{section.title}</h3>
                {section.keys.map((key) => (
                  <div
                    key={key}
                    style={{
                      marginBottom: '12px',
                      padding: '8px',
                      backgroundColor: '#f5f5f5',
                      borderRadius: '6px',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleEdit(key)}
                  >
                    <div style={{ fontSize: '11px', color: '#666', marginBottom: '4px' }}>{key}</div>
                    <div style={{ fontSize: '14px', color: '#333' }}>{t(key)}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
            <button
              onClick={importTranslations}
              style={{
                flex: 1,
                padding: '12px',
                backgroundColor: '#666',
                color: '#F5E6D3',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '500',
              }}
            >
              Import Translations
            </button>
            <button
              onClick={exportTranslations}
              style={{
                flex: 1,
                padding: '12px',
                backgroundColor: '#012169',
                color: '#F5E6D3',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '500',
              }}
            >
              Export Translations
            </button>
          </div>
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1000,
          }}
        />
      )}

      {/* Edit Dialog */}
      {showEditDialog && activeKey && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            width: '600px',
            maxWidth: '90vw',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
            zIndex: 1003,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ margin: 0, color: '#333' }}>Edit: {activeKey}</h3>
            <button
              onClick={() => {
                setShowEditDialog(false);
                setActiveKey(null);
                setEditValue('');
              }}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#666',
              }}
            >
              ✕
            </button>
          </div>

          <textarea
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            style={{
              width: '100%',
              minHeight: '150px',
              padding: '12px',
              fontSize: '14px',
              borderRadius: '6px',
              border: '1px solid #ddd',
              fontFamily: 'inherit',
              resize: 'vertical',
            }}
          />

          <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
            <button
              onClick={() => {
                setShowEditDialog(false);
                setActiveKey(null);
                setEditValue('');
              }}
              style={{
                flex: 1,
                padding: '12px',
                backgroundColor: '#666',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '500',
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              style={{
                flex: 1,
                padding: '12px',
                backgroundColor: '#012169',
                color: '#F5E6D3',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '500',
              }}
            >
              Save
            </button>
          </div>
        </div>
      )}

      {/* Edit Dialog Overlay */}
      {showEditDialog && (
        <div
          onClick={() => {
            setShowEditDialog(false);
            setActiveKey(null);
            setEditValue('');
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1002,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          }}
        />
      )}
    </>
  );
};

export default TranslationEditor;
