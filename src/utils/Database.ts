import Realm from 'realm';

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

  public update(id: number, updatedData: RealmData) {
    try {
      if (!this.realm) {
        throw new Error(
          'Realm is not initialized. Call initializeRealm before using updateData.',
        );
      }

      // Assume the schema name is the first schema in the list
      const schemaName = this.schemas[0]?.name;

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

  public get(id: number) {
    try {
      if (!this.realm) {
        throw new Error(
          'Realm is not initialized. Call initializeRealm before using getAllData.',
        );
      }

      // Assume the schema name is the first schema in the list
      const schemaName = this.schemas[0]?.name;

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

  public delete(id: number) {
    try {
      if (!this.realm) {
        throw new Error(
          'Realm is not initialized. Call initializeRealm before using deleteData.',
        );
      }

      // Assume the schema name is the first schema in the list
      const schemaName = this.schemas[0]?.name;

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

  public getAll() {
    try {
      if (!this.realm) {
        throw new Error(
          'Realm is not initialized. Call initializeRealm before using getAllData.',
        );
      }

      // Assume the schema name is the first schema in the list
      const schemaName = this.schemas[0]?.name;

      if (!schemaName) {
        throw new Error(
          'No schema found. Make sure to provide at least one schema when creating the Database instance.',
        );
      }

      const allData = this.realm.objects(schemaName);
      console.log('All data retrieved successfully:', allData);

      return allData;
    } catch (error) {
      console.error('Error retrieving all data:', error);
      return [];
    }
  }

  public insert(data: RealmData) {
    try {
      if (!this.realm) {
        throw new Error(
          'Realm is not initialized. Call initializeRealm before using insertData.',
        );
      }

      // Assume the schema name is the first schema in the list
      const schemaName = this.schemas[0]?.name;

      if (!schemaName) {
        throw new Error(
          'No schema found. Make sure to provide at least one schema when creating the Database instance.',
        );
      }

      this.realm.write(() => {
        this.realm!.create(schemaName, data);
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
