export class ArgumentError extends Error { }

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

export function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage > 70) {
    throw new Error('The percentage exceeds 70%');
  }
}
export function reportOverheating(temperature) {
  if (temperature > 500) {
    throw new OverheatingError(temperature)
  }
  if (temperature == null) {
    throw new ArgumentError('Broken sensor')
  }
}

export function monitorTheMachine(actions) {
  try {
    actions.check();
  } catch (error) {
    switch (error.constructor) {
      case ArgumentError:
        actions.alertDeadSensor()
        break;
      case OverheatingError:
        error.temperature > 600 ? actions.shutdown() : actions.alertOverheating()
        break;
      default:
        throw error;
    }
  }
}

/* export function monitorTheMachine(actions) {
  try {
    actions.check()
  } catch (error) {
    if (error instanceof OverheatingError) {
      if (error.temperature > 600) {
        actions.shutdown()
      } else {
        actions.alertOverheating()
      }
    } else if (error instanceof ArgumentError) {
      actions.alertDeadSensor()
    } else {
      throw error
    }
  }
} */

/* export function monitorTheMachine(actions) {
  try {
    actions.check();
  } catch (error) {
    switch (true) {
      case error instanceof ArgumentError:
        actions.alertDeadSensor()
        break;
      case error instanceof OverheatingError:
        (error.temperature > 600) ? actions.shutdown() : actions.alertOverheating()
        break;
      default:
        throw error;
    }
  }
}
 */