/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
module phosphor.collections {

/**
 * A read only view of a collection.
 */
export
class ReadOnlyCollection<T> implements ICollection<T> {
  /**
   * Construct a new read only collection.
   */
  constructor(collection: ICollection<T>) {
    this._collection = collection;
  }

  /**
   * True if the collection has elements, false otherwise.
   */
  get empty(): boolean {
    return this._collection.empty;
  }

  /**
   * The number of elements in the collection.
   */
  get size(): number {
    return this._collection.size;
  }

  /**
   * Get an iterator for the elements in the collection.
   */
  iterator(): IIterator<T> {
    return this._collection.iterator();
  }

  /**
   * Test whether the collection contains the given value.
   */
  contains(value: T): boolean {
    return this._collection.contains(value);
  }

  /**
   * Add a value to the collection.
   *
   * This method always throws.
   */
  add(value: T): boolean {
    throw new Error('collection is read only');
  }

  /**
   * Remove a value from the collection.
   *
   * This method always throws.
   */
  remove(value: T): boolean {
    throw new Error('collection is read only');
  }

  /**
   * Remove all elements from the collection.
   *
   * This method always throws.
   */
  clear(): void {
    throw new Error('collection is read only');
  }

  protected _collection: ICollection<T>;
}

} // module phosphor.collections
