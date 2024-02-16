import Realm from 'realm';
import IDevice from '../interfaces/IDevice';

interface RealmData {
  [key: string]: any;
}

export default class Database {
  private realm: Realm | null = null;

  constructor(private schemas: Realm.ObjectSchema[]) {
    this.initializeRealm();
  }

  private initializeRealm() {
    if (!this.realm) {
      this.realm = new Realm({schema: this.schemas});
    }
  }

  public update(i: number, id: number, updatedData: RealmData) {
    try {
      if (!this.realm) {
        throw new Error(
          'Realm is not initialized. Call initializeRealm before using updateData.',
        );
      }

      // Assume the schema name is the first schema in the list
      const schemaName = this.schemas[i]?.name;

      if (!schemaName) {
        throw new Error(
          'No schema found. Make sure to provide at least one schema when creating the Database instance.',
        );
      }

      const existingData = this.realm.objectForPrimaryKey(schemaName, id);

      if (!existingData) {
        console.error(`Data with ID ${id} not found.`);
        return;
      }

      this.realm.write(() => {
        Object.keys(updatedData).forEach(key => {
          existingData[key] = updatedData[key];
        });
      });

      console.log('Data updated successfully!');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  }

  public get(i: number, id: number) {
    
    try {
      if (!this.realm) {
        throw new Error(
          'Realm is not initialized. Call initializeRealm before using getAllData.',
        );
      }

      // Assume the schema name is the first schema in the list
      const schemaName = this.schemas[i]?.name;

      if (!schemaName) {
        throw new Error(
          'No schema found. Make sure to provide at least one schema when creating the Database instance.',
        );
      }

      const data = this.realm.objectForPrimaryKey(schemaName, id);
      console.log('All data retrieved successfully:', data);

      return data;
    } catch (error) {
      console.error('Error retrieving all data:', error);
      return [];
    }
  }

  public delete(i: number, id: number) {
    try {
      if (!this.realm) {
        throw new Error(
          'Realm is not initialized. Call initializeRealm before using deleteData.',
        );
      }

      // Assume the schema name is the first schema in the list
      const schemaName = this.schemas[i]?.name;

      if (!schemaName) {
        throw new Error(
          'No schema found. Make sure to provide at least one schema when creating the Database instance.',
        );
      }

      const existingData = this.realm.objectForPrimaryKey(schemaName, id);

      if (!existingData) {
        console.error(`Data with ID ${id} not found.`);
        return;
      }

      this.realm.write(() => {
        this.realm!.delete(existingData);
      });

      console.log('Data deleted successfully!');
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  }

  public getAll(i: number) {
    try {
      if (!this.realm) {
        throw new Error(
          'Realm is not initialized. Call initializeRealm before using getAllData.',
        );
      }

      // Assume the schema name is the first schema in the list
      const schemaName = this.schemas[i]?.name;

      if (!schemaName) {
        throw new Error(
          'No schema found. Make sure to provide at least one schema when creating the Database instance.',
        );
      }

      const allData = Array.from(this.realm.objects<Realm.Object & IDevice>(schemaName));

      return allData;
    } catch (error) {
      const dvs: [] = [];
      console.error('Error retrieving all data:', error);
   
      return dvs;
    }
  }

  public getAllByDeviceNumber(i: number, deviceNumber: number) {
    try {
      if (!this.realm) {
        throw new Error(
          'Realm is not initialized. Call initializeRealm before using getAllData.',
        );
      }

      // Assume the schema name is the first schema in the list
      const schemaName = this.schemas[i]?.name;

      if (!schemaName) {
        throw new Error(
          'No schema found. Make sure to provide at least one schema when creating the Database instance.',
        );
      }

   
      const allData = this.realm.objects(schemaName).filtered(`device_id == ${deviceNumber}`);

      return allData;
    } catch (error) {
      const dvs: [] = [];
      console.error('Error retrieving all data:', error);
   
      return dvs;
    }
  }

  public insert(i: number, data: RealmData) {
    try {
      if (!this.realm) {
        throw new Error(
          'Realm is not initialized. Call initializeRealm before using insertData.',
        );
      }

      // Assume the schema name is the first schema in the list
      const schemaName = this.schemas[i]?.name;

      if (!schemaName) {
        throw new Error(
          'No schema found. Make sure to provide at least one schema when creating the Database instance.',
        );
      }

      this.realm.write(() => {
        const id = new Date().getTime();
      
        // Merge the generated ID with the provided data
        const newData = { id, ...data };
        this.realm!.create(schemaName, newData);
      });

      console.log('Data inserted successfully!');
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  }

  // Add other database operations as needed

  public closeRealm() {
    if (this.realm) {
      this.realm.close();
      this.realm = null;
    }
  }
}
