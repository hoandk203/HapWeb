const LocationMap = () => {
    return (
        <div className="map-container h-100 radius-xl overflow-hidden border">
            <iframe 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14896.333200408311!2d105.83211638332519!3d21.02935270638375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aba15ec15d17%3A0x620e85c2cfe14d4c!2zTMSDbmcgQ2jhu6cgdOG7i2NoIEjhu5MgQ2jDrSBNaW5o!5e0!3m2!1svi!2s!4v1731138099249!5m2!1svi!2s`}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    )
}

export default LocationMap;