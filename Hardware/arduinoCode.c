#define LEDPIN 13

#define SENSORPIN 4

// variables will change:
int sensorState = 0, lastState=0, itemCount = 0, startTime = 0, endTime = 0, isFull = 0, itemSize = 0;         // variable for reading the pushbutton status

void setup() {
  // initialize the LED pin as an output:
  pinMode(LEDPIN, OUTPUT);
  // initialize the sensor pin as an input:
  pinMode(SENSORPIN, INPUT);
  digitalWrite(SENSORPIN, HIGH); // turn on the pullup
  Serial.begin(9600);
}

void loop(){
  sensorState = digitalRead(SENSORPIN);
  if (!isFull) {
    // read the state of the pushbutton value:
    // check if the sensor beam is broken
    // if it is, the sensorState is LOW:
    if (sensorState == LOW) {
      // turn LED on:
      digitalWrite(LEDPIN, HIGH);
    }
    else {
      // turn LED off:
      digitalWrite(LEDPIN, LOW);
    }

    /*
    if (sensorState && !lastState) {
      Serial.println("Unbroken");
      endTime = millis ();
    }
    */

    if (!sensorState) {
      // Start a timer for the item falling through the sensor
      startTime = millis();
      // Item count, may be used in future iterations of code
      itemCount += 1;
      // item is falling through and bin not marked as full loop
      while (!sensorState && !isFull) {
        sensorState = digitalRead(SENSORPIN);
        if (sensorState) {
          // Item has passed through
          endTime = millis();
          itemSize = endTime - startTime;
          Serial.print("The item thrown away was of size: ");
          Serial.println(itemSize);
          // Reset timer values
          startTime = 0;
          endTime = 0;
        }
        else {
          endTime = millis();
          if (endTime - startTime > 10000) {
            // Item has not passed though in 10 seconds
            Serial.print("Bin is Full. ");
            isFull = 1;
            Serial.print("There are ");
            Serial.print(itemCount);
            Serial.println(" items in the bin");
          }
        }
      }
    }
  }
  // Bin has been emptied
  if (sensorState && isFull > 0) {
    Serial.println("Bin has been emptied");
    isFull = 0;
    itemCount = 0;
    // Wait ten seconds while bin is being set up (subject to change)
    delay(10000);
  }
  //lastState = sensorState;
}
